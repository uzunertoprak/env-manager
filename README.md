# EnvManager

### `EnvManager`, çevre değişkenlerini yönetmek için kullanılan bir sınıftır. Bir .env dosyasına depolanan çevre değişkenlerini okuyabilir, yeni çevre değişkenleri oluşturabilir, var olanları güncelleyebilir veya silebilirsiniz.

# Kurulum

```bash
$ npm install #uzerinde calisiyorum
```

# Kullanım

```typescript
import { EnvManager } from "env-manager";

// EnvManager örneğini oluşturun
const envManager = new EnvManager(".env");

// Çevre değişkeni almak için
const value = envManager.getEnvVar("KEY");

// Tüm çevre değişkenlerini almak için
const allVars = envManager.getAllEnvVars();

// Yeni bir çevre değişkeni oluşturmak için
envManager.createEnvVar("KEY", "VALUE");

// Bir çevre değişkenini güncellemek için
envManager.updateEnvVar("KEY", "NEW_VALUE");

// Bir çevre değişkenini silmek için
envManager.deleteEnvVar("KEY");

// Tüm çevre değişkenlerini silmek için
envManager.deleteAllEnvVars();

// Bir çevre değişkeninin var olup olmadığını kontrol etmek için
const exists = envManager.checkEnvVar("KEY");
```

## API
`constructor(env_path: string)`

#### <li>env_path: Çevre değişkenlerinin depolandığı dosyanın yolunu temsil eder.</li>

`getEnvVar(key: string): string | boolean`

#### Belirtilen anahtara sahip çevre değişkenini alır.

#### <li>key: Çevre değişkeni anahtarı.</li>

`getAllEnvVars(): { [key: string]: string }`

#### Tüm çevre değişkenlerini bir nesne olarak alır.

`createEnvVar(key: string, value: string | number): void`

#### Yeni bir çevre değişkeni oluşturur veya var olan bir çevre değişkenini günceller.

#### <li>key: Çevre değişkeni anahtarı.</li>
#### <li>value: Çevre değişkeni değeri.</li>

`updateEnvVar(key: string, value: string | number): void | boolean`

#### Var olan bir çevre değişkenini günceller.

#### <li>key: Güncellenecek çevre değişkeni anahtarı.</li>
#### <li>value: Güncellenecek çevre değişkeni değeri.</li>

`deleteEnvVar(key: string): void`

#### Belirtilen anahtara sahip bir çevre değişkenini siler.

#### <li>key: Silinecek çevre değişkeni anahtarı.</li>

`deleteAllEnvVars(): void`

#### Tüm çevre değişkenlerini siler.

`checkEnvVar(key: string): boolean`

#### Belirtilen anahtara sahip bir çevre değişkeninin var olup olmadığını kontrol eder.

#### <li>key: Kontrol edilecek çevre değişkeni anahtarı.</li>


<br><br><br><br><br>
# MIT License

Telif Hakkı (c) [2023] [Toprak UZUNER]

Bu yazılımın bir kopyasını edinme, kullanma ve dağıtma izni burada verilir, örneğin:
Yazılımın kopyalanması, değiştirilmesi, birleştirilmesi, yayılması, yayınlanması, alt lisans verilmesi veya satılması dahil, yazılımın kopyalarını kullanma veya işleme koşullarıyla birlikte, kısıtlama olmaksızın, yazılımın sağlandığı kişilere verilen haklar aşağıdaki durumları içerir:

Yukarıdaki telif hakkı bildirimi ve bu izin bildirimi yazılımın tüm kopyalarına veya önemli parçalarına eklenmelidir.

YAZILIM "HİÇBİR GARANTİ İLE" SAĞLANIR, AÇIK VEYA ZIMNİ, SATILABİLİRLİK, BELİRLİ BİR AMACA UYGUNLUK VE İHLAL ETME KONUSUNDAKİ TÜM GARANTİLER DAHİL ANCAK BUNLARLA SINIRLI DEĞİLDİR. HERHANGİ BİR KOŞULDA, YAZARLAR VEYA TELİF HAKKI SAHİPLERİ HİÇBİR DURUMDA SORUMLU TUTULAMAZ. HİÇBİR OLAYDA, YAZARLAR VEYA TELİF HAKKI SAHİPLERİ, SÖZLEŞME, HAKSIZ FİİL VEYA DİĞER EYLEMLERDEN KAYNAKLANAN, YAZILIMLA VEYA YAZILIMIN KULLANIMI VEYA DİĞER ANLAŞMALARLA İLGİLİ, ÖZGÜN YAZILIMLA İLGİLİ, YAZILIMIN KULLANIMI VEYA BAŞKA BİR İLİŞKİYLE İLGİLİ OLARAK HERHANGİ BİR İDDİA, ZARARLAR VEYA DİĞER SORUMLULUKLAR İÇİN HİÇBİR DURUMDA SORUMLU TUTULAMAZLAR.
