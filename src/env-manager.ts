import fs from "fs";

export class EnvManager {
  private ENV_FILE_PATH: string;
  private envConfig: { [key: string]: string };

  constructor(env_path: string) {
    this.ENV_FILE_PATH = env_path;
    this.envConfig = {};
    this.#init();
  }

  public getEnvVar(key: string): string | boolean {
    if (this.checkEnvVar(key)) {
      return this.envConfig[key];
    }
    return false
  }

  public getAllEnvVars(): { [key: string]: string } {
    return this.envConfig;
  }

  public createEnvVar(key: string, value: string | number): void {
    if (this.checkEnvVar(key)) {
      this.updateEnvVar(key, value);
    } else {
      const newEnvVar = `${key}=${value}`;
      fs.appendFileSync(this.ENV_FILE_PATH, `\n${newEnvVar}`);
      this.envConfig[key] = String(value);
      this.#loadEnvVars();
    }
  }

  public updateEnvVar(key: string, value: string | number): void | boolean {
    if (this.checkEnvVar(key)) {
      this.#setEnvVar(key, value);
      this.#loadEnvVars();
    }
    return false;
  }

  public deleteEnvVar(key: string): void {
    const envFile = fs.readFileSync(this.ENV_FILE_PATH);
    let envVars = envFile.toString().split("\n");
    envVars = envVars.filter((envVar) => envVar.split("=")[0] !== key);
    fs.writeFileSync(this.ENV_FILE_PATH, envVars.join("\n"));
    delete this.envConfig[key];
  }

  public deleteAllEnvVars(): void {
    fs.writeFileSync(this.ENV_FILE_PATH, "");
    this.envConfig = {};
  }

  public checkEnvVar(key: string): boolean {
    return key in this.envConfig;
  }

  #init(): void {
    const envFile = fs.readFileSync(this.ENV_FILE_PATH);
    const envVars = envFile.toString().split("\n");
    envVars.forEach((envVar) => {
      const [key, value] = envVar.split("=");
      this.envConfig[key] = value;
    });
  }

  #loadEnvVars(): void {
    Object.keys(this.envConfig).forEach((key) => {
      process.env[key] = this.envConfig[key];
    });
  }

  #setEnvVar(key: string, value: string | number): void {
    this.envConfig[key] = String(value);
    const envFile = fs.readFileSync(this.ENV_FILE_PATH);
    let envVars = envFile.toString().split("\n");
    envVars = envVars.map((envVar) => {
      if (envVar.split("=")[0] === key) {
        return `${key}=${value}`;
      }
      return envVar;
    });
    fs.writeFileSync(this.ENV_FILE_PATH, envVars.join("\n"));
    this.#loadEnvVars();
  }
}
