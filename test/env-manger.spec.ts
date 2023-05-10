import fs from "fs";
import { EnvManager } from "../src";

describe("EnvManager", () => {
    let envManager: EnvManager;

    beforeEach(() => {
        envManager = new EnvManager("./test/.env.test");
    });

    afterEach(() => {
        envManager.deleteAllEnvVars();
    });

    describe("getEnvVar", () => {
        it("should return the value of an existing environment variable", () => {
            envManager.createEnvVar("DB_HOST", "localhost");
            const result = envManager.getEnvVar("DB_HOST");
            expect(result).toBe("localhost");
        });

        it("should return false for a non-existing environment variable", () => {
            const result = envManager.getEnvVar("DB_PORT");
            expect(result).toBe(false);
        });
    });

    describe("getAllEnvVars", () => {
        it("should return all environment variables", () => {
            envManager.createEnvVar("DB_HOST", "localhost");
            envManager.createEnvVar("DB_PORT", "5432");
            const result = envManager.getAllEnvVars();
            expect(result).toEqual({
                DB_HOST: "localhost",
                DB_PORT: "5432",
            });
        });
    });

    describe("createEnvVar", () => {
        it("should create a new environment variable", () => {
            envManager.createEnvVar("DB_HOST", "localhost");
            expect(envManager.getAllEnvVars()).toEqual({
                DB_HOST: "localhost",
            });
        });

        it("should update an existing environment variable if it already exists", () => {
            envManager.createEnvVar("DB_HOST", "localhost");
            envManager.createEnvVar("DB_HOST", "newhost");
            expect(envManager.getAllEnvVars()).toEqual({
                DB_HOST: "newhost",
            });
        });
    });

    describe("deleteEnvVar", () => {
        it("should delete an existing environment variable", () => {
            envManager.createEnvVar("DB_HOST", "localhost");
            envManager.deleteEnvVar("DB_HOST");
            expect(envManager.checkEnvVar("DB_HOST")).toBe(false);
        });
    });

    describe("deleteAllEnvVars", () => {
        it("should delete all environment variables", () => {
            envManager.createEnvVar("DB_HOST", "localhost");
            envManager.createEnvVar("DB_PORT", "5432");
            envManager.deleteAllEnvVars();
            expect(envManager.getAllEnvVars()).toEqual({});
        });
    });

    describe("checkEnvVar", () => {
        it("should return true for an existing environment variable", () => {
            envManager.createEnvVar("DB_HOST", "localhost");
            const result = envManager.checkEnvVar("DB_HOST");
            expect(result).toBe(true);
        });

        it("should return false for a non-existing environment variable", () => {
            const result = envManager.checkEnvVar("DB_PORT");
            expect(result).toBe(false);
        });
    });

});
