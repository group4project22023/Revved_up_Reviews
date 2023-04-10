 // Query to get full list of cars
    /* 
    var carData = [];
    try {
    fetch("https://private-anon-45e0b8408b-carsapi1.apiary-mock.com/cars")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          carData.push({
            year: data[i].year,
            make: data[i].make,
            model: data[i].model
        });
        }
      });
    } catch (err) {
      console.log(err);
    }
    */

const cars = [
      {
          "year": 2016,
          "make": "acura",
          "model": "ilx"
      },
      {
          "year": 2016,
          "make": "acura",
          "model": "rdx"
      },
      {
          "year": 2016,
          "make": "acura",
          "model": "rlx"
      },
      {
          "year": 2016,
          "make": "acura",
          "model": "tlx"
      },
      {
          "year": 2016,
          "make": "alfa-romeo",
          "model": "4c"
      },
      {
          "year": 2016,
          "make": "alfa-romeo",
          "model": "4c-spider"
      },
      {
          "year": 2016,
          "make": "aston-martin",
          "model": "db9-gt"
      },
      {
          "year": 2016,
          "make": "aston-martin",
          "model": "rapide-s"
      },
      {
          "year": 2016,
          "make": "aston-martin",
          "model": "v12-vantage-s"
      },
      {
          "year": 2016,
          "make": "aston-martin",
          "model": "v8-vantage"
      },
      {
          "year": 2016,
          "make": "aston-martin",
          "model": "vanquish"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "a3"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "a3-sportback-e-tron"
      },
      {
          "year": 2017,
          "make": "audi",
          "model": "a4"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "a6"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "a7"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "a8"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "q3"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "q5"
      },
      {
          "year": 2017,
          "make": "audi",
          "model": "q7"
      },
      {
          "year": 2017,
          "make": "audi",
          "model": "r8"
      },
      {
          "year": 2015,
          "make": "audi",
          "model": "rs-5"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "rs-7"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "s3"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "s4"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "s5"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "s6"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "s7"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "s8"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "sq5"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "tt"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "tts"
      },
      {
          "year": 2016,
          "make": "audi",
          "model": "allroad"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "2-series"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "3-series"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "3-series-gran-turismo"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "4-series"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "4-series-gran-coupe"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "5-series"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "5-series-gran-turismo"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "6-series"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "6-series-gran-coupe"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "7-series"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "alpina-b6-gran-coupe"
      },
      {
          "year": 2015,
          "make": "bmw",
          "model": "alpina-b7"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "activehybrid-5"
      },
      {
          "year": 2015,
          "make": "bmw",
          "model": "activehybrid-7"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "m2"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "m3"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "m4"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "m5"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "m6"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "m6-gran-coupe"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x1"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x3"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x4"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x5"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x5-m"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x5-edrive"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x6"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "x6-m"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "z4"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "i3"
      },
      {
          "year": 2016,
          "make": "bmw",
          "model": "i8"
      },
      {
          "year": 2015,
          "make": "bentley",
          "model": "continental-gt"
      },
      {
          "year": 2015,
          "make": "bentley",
          "model": "flying-spur"
      },
      {
          "year": 2015,
          "make": "bentley",
          "model": "mulsanne"
      },
      {
          "year": 2016,
          "make": "buick",
          "model": "cascada"
      },
      {
          "year": 2016,
          "make": "buick",
          "model": "regal"
      },
      {
          "year": 2016,
          "make": "buick",
          "model": "verano"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "ats"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "ats-coupe"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "ats-v"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "ct6"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "cts"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "cts-v"
      },
      {
          "year": 2015,
          "make": "cadillac",
          "model": "cts-v-coupe"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "elr"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "escalade"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "escalade-esv"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "srx"
      },
      {
          "year": 2017,
          "make": "cadillac",
          "model": "xt5"
      },
      {
          "year": 2016,
          "make": "cadillac",
          "model": "xts"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "camaro"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "city-express"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "colorado"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "corvette"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "cruze"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "cruze-limited"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "express"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "express-cargo"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "impala"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "malibu"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "malibu-limited"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "ss"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "silverado-1500"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "sonic"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "spark"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "spark-ev"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "suburban"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "tahoe"
      },
      {
          "year": 2016,
          "make": "chevrolet",
          "model": "trax"
      },
      {
          "year": 2016,
          "make": "chrysler",
          "model": "200"
      },
      {
          "year": 2016,
          "make": "chrysler",
          "model": "300"
      },
      {
          "year": 2017,
          "make": "chrysler",
          "model": "pacifica"
      },
      {
          "year": 2016,
          "make": "dodge",
          "model": "challenger"
      },
      {
          "year": 2016,
          "make": "dodge",
          "model": "charger"
      },
      {
          "year": 2016,
          "make": "dodge",
          "model": "dart"
      },
      {
          "year": 2016,
          "make": "dodge",
          "model": "durango"
      },
      {
          "year": 2016,
          "make": "dodge",
          "model": "grand-caravan"
      },
      {
          "year": 2016,
          "make": "dodge",
          "model": "journey"
      },
      {
          "year": 2016,
          "make": "dodge",
          "model": "viper"
      },
      {
          "year": 2016,
          "make": "fiat",
          "model": "500"
      },
      {
          "year": 2016,
          "make": "fiat",
          "model": "500l"
      },
      {
          "year": 2016,
          "make": "fiat",
          "model": "500x"
      },
      {
          "year": 2015,
          "make": "ferrari",
          "model": "458-italia"
      },
      {
          "year": 2015,
          "make": "ferrari",
          "model": "california-t"
      },
      {
          "year": 2015,
          "make": "ferrari",
          "model": "f12-berlinetta"
      },
      {
          "year": 2015,
          "make": "ferrari",
          "model": "ff"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "c-max-energi"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "c-max-hybrid"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "edge"
      },
      {
          "year": 2017,
          "make": "ford",
          "model": "escape"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "explorer"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "f-450-super-duty"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "fiesta"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "flex"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "focus-rs"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "focus-st"
      },
      {
          "year": 2017,
          "make": "ford",
          "model": "fusion"
      },
      {
          "year": 2017,
          "make": "ford",
          "model": "fusion-energi"
      },
      {
          "year": 2017,
          "make": "ford",
          "model": "fusion-hybrid"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "mustang"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "shelby-gt350"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "taurus"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "transit-connect"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "transit-van"
      },
      {
          "year": 2016,
          "make": "ford",
          "model": "transit-wagon"
      },
      {
          "year": 2017,
          "make": "gmc",
          "model": "acadia"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "canyon"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "savana"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "savana-cargo"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "sierra-2500hd"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "sierra-3500hd"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "terrain"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "yukon"
      },
      {
          "year": 2016,
          "make": "gmc",
          "model": "yukon-xl"
      },
      {
          "year": 2016,
          "make": "honda",
          "model": "accord"
      },
      {
          "year": 2015,
          "make": "honda",
          "model": "accord-hybrid"
      },
      {
          "year": 2016,
          "make": "honda",
          "model": "cr-v"
      },
      {
          "year": 2016,
          "make": "honda",
          "model": "cr-z"
      },
      {
          "year": 2015,
          "make": "honda",
          "model": "crosstour"
      },
      {
          "year": 2016,
          "make": "honda",
          "model": "fit"
      },
      {
          "year": 2016,
          "make": "honda",
          "model": "hr-v"
      },
      {
          "year": 2016,
          "make": "honda",
          "model": "pilot"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "accent"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "azera"
      },
      {
          "year": 2017,
          "make": "hyundai",
          "model": "elantra"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "elantra-gt"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "equus"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "genesis"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "genesis-coupe"
      },
      {
          "year": 2017,
          "make": "hyundai",
          "model": "santa-fe"
      },
      {
          "year": 2017,
          "make": "hyundai",
          "model": "santa-fe-sport"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "sonata"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "sonata-hybrid"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "sonata-plug-in-hybrid"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "tucson"
      },
      {
          "year": 2016,
          "make": "hyundai",
          "model": "veloster"
      },
      {
          "year": 2015,
          "make": "infiniti",
          "model": "q40"
      },
      {
          "year": 2016,
          "make": "infiniti",
          "model": "q50"
      },
      {
          "year": 2015,
          "make": "infiniti",
          "model": "q60-convertible"
      },
      {
          "year": 2016,
          "make": "infiniti",
          "model": "q70"
      },
      {
          "year": 2016,
          "make": "infiniti",
          "model": "qx50"
      },
      {
          "year": 2016,
          "make": "infiniti",
          "model": "qx60"
      },
      {
          "year": 2016,
          "make": "infiniti",
          "model": "qx70"
      },
      {
          "year": 2016,
          "make": "infiniti",
          "model": "qx80"
      },
      {
          "year": 2017,
          "make": "jaguar",
          "model": "f-pace"
      },
      {
          "year": 2017,
          "make": "jaguar",
          "model": "f-type"
      },
      {
          "year": 2017,
          "make": "jaguar",
          "model": "xe"
      },
      {
          "year": 2017,
          "make": "jaguar",
          "model": "xf"
      },
      {
          "year": 2016,
          "make": "jaguar",
          "model": "xj"
      },
      {
          "year": 2015,
          "make": "jaguar",
          "model": "xk"
      },
      {
          "year": 2016,
          "make": "jeep",
          "model": "cherokee"
      },
      {
          "year": 2016,
          "make": "jeep",
          "model": "compass"
      },
      {
          "year": 2016,
          "make": "jeep",
          "model": "grand-cherokee"
      },
      {
          "year": 2016,
          "make": "jeep",
          "model": "grand-cherokee-srt"
      },
      {
          "year": 2016,
          "make": "jeep",
          "model": "patriot"
      },
      {
          "year": 2016,
          "make": "jeep",
          "model": "renegade"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "forte"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "k900"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "optima"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "optima-hybrid"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "rio"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "sedona"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "sorento"
      },
      {
          "year": 2016,
          "make": "kia",
          "model": "soul"
      },
      {
          "year": 2017,
          "make": "kia",
          "model": "sportage"
      },
      {
          "year": 2015,
          "make": "lamborghini",
          "model": "aventador"
      },
      {
          "year": 2015,
          "make": "lamborghini",
          "model": "huracan"
      },
      {
          "year": 2016,
          "make": "land-rover",
          "model": "discovery-sport"
      },
      {
          "year": 2015,
          "make": "land-rover",
          "model": "lr2"
      },
      {
          "year": 2016,
          "make": "land-rover",
          "model": "lr4"
      },
      {
          "year": 2016,
          "make": "land-rover",
          "model": "range-rover"
      },
      {
          "year": 2017,
          "make": "land-rover",
          "model": "range-rover-evoque"
      },
      {
          "year": 2016,
          "make": "land-rover",
          "model": "range-rover-sport"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "ct-200h"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "es-300h"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "es-350"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "gs-200t"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "gs-350"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "gs-450h"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "gs-f"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "gx-460"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "is-200t"
      },
      {
          "year": 2015,
          "make": "lexus",
          "model": "is-250"
      },
      {
          "year": 2015,
          "make": "lexus",
          "model": "is-250-c"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "is-300"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "is-350"
      },
      {
          "year": 2015,
          "make": "lexus",
          "model": "is-350-c"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "ls-460"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "ls-600h-l"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "lx-570"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "nx-200t"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "nx-300h"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "rc-200t"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "rc-300"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "rc-350"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "rc-f"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "rx-350"
      },
      {
          "year": 2016,
          "make": "lexus",
          "model": "rx-450h"
      },
      {
          "year": 2017,
          "make": "lincoln",
          "model": "mkc"
      },
      {
          "year": 2016,
          "make": "lincoln",
          "model": "mks"
      },
      {
          "year": 2016,
          "make": "lincoln",
          "model": "mkt"
      },
      {
          "year": 2016,
          "make": "lincoln",
          "model": "mkx"
      },
      {
          "year": 2016,
          "make": "lincoln",
          "model": "navigator"
      },
      {
          "year": 2016,
          "make": "mini",
          "model": "cooper"
      },
      {
          "year": 2016,
          "make": "mini",
          "model": "cooper-clubman"
      },
      {
          "year": 2016,
          "make": "mini",
          "model": "cooper-countryman"
      },
      {
          "year": 2015,
          "make": "mini",
          "model": "cooper-coupe"
      },
      {
          "year": 2016,
          "make": "mini",
          "model": "cooper-paceman"
      },
      {
          "year": 2015,
          "make": "mini",
          "model": "cooper-roadster"
      },
      {
          "year": 2016,
          "make": "maserati",
          "model": "ghibli"
      },
      {
          "year": 2016,
          "make": "maserati",
          "model": "granturismo"
      },
      {
          "year": 2016,
          "make": "maserati",
          "model": "granturismo-convertible"
      },
      {
          "year": 2016,
          "make": "maserati",
          "model": "quattroporte"
      },
      {
          "year": 2016,
          "make": "mazda",
          "model": "3"
      },
      {
          "year": 2015,
          "make": "mazda",
          "model": "5"
      },
      {
          "year": 2016,
          "make": "mazda",
          "model": "6"
      },
      {
          "year": 2016,
          "make": "mazda",
          "model": "cx-3"
      },
      {
          "year": 2016,
          "make": "mazda",
          "model": "cx-5"
      },
      {
          "year": 2016,
          "make": "mazda",
          "model": "mx-5-miata"
      },
      {
          "year": 2015,
          "make": "mclaren",
          "model": "650s-coupe"
      },
      {
          "year": 2015,
          "make": "mclaren",
          "model": "650s-spider"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "amg-gt"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "b-class-electric-drive"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "cla-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "cls-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "g-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "gl-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "gla-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "glc-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "gle-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "gle-class-coupe"
      },
      {
          "year": 2015,
          "make": "mercedes-benz",
          "model": "glk-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "maybach"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "metris"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "sl-class"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "slk-class"
      },
      {
          "year": 2015,
          "make": "mercedes-benz",
          "model": "sls-amg-gt-final-edition"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "sprinter"
      },
      {
          "year": 2016,
          "make": "mercedes-benz",
          "model": "sprinter-worker"
      },
      {
          "year": 2016,
          "make": "mitsubishi",
          "model": "lancer"
      },
      {
          "year": 2015,
          "make": "mitsubishi",
          "model": "lancer-evolution"
      },
      {
          "year": 2017,
          "make": "mitsubishi",
          "model": "mirage"
      },
      {
          "year": 2017,
          "make": "mitsubishi",
          "model": "mirage-g4"
      },
      {
          "year": 2016,
          "make": "mitsubishi",
          "model": "outlander"
      },
      {
          "year": 2016,
          "make": "mitsubishi",
          "model": "outlander-sport"
      },
      {
          "year": 2016,
          "make": "mitsubishi",
          "model": "i-miev"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "370z"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "altima"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "frontier"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "gt-r"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "juke"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "maxima"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "murano"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "nv-cargo"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "nv-passenger"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "nv200"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "pathfinder"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "quest"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "rogue"
      },
      {
          "year": 2015,
          "make": "nissan",
          "model": "rogue-select"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "sentra"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "titan-xd"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "versa"
      },
      {
          "year": 2016,
          "make": "nissan",
          "model": "versa-note"
      },
      {
          "year": 2015,
          "make": "nissan",
          "model": "xterra"
      },
      {
          "year": 2017,
          "make": "porsche",
          "model": "718-boxster"
      },
      {
          "year": 2017,
          "make": "porsche",
          "model": "911"
      },
      {
          "year": 2015,
          "make": "porsche",
          "model": "918-spyder"
      },
      {
          "year": 2016,
          "make": "porsche",
          "model": "boxster"
      },
      {
          "year": 2016,
          "make": "porsche",
          "model": "cayenne"
      },
      {
          "year": 2016,
          "make": "porsche",
          "model": "cayman"
      },
      {
          "year": 2017,
          "make": "porsche",
          "model": "macan"
      },
      {
          "year": 2016,
          "make": "porsche",
          "model": "panamera"
      },
      {
          "year": 2016,
          "make": "ram",
          "model": "1500"
      },
      {
          "year": 2016,
          "make": "ram",
          "model": "3500"
      },
      {
          "year": 2015,
          "make": "ram",
          "model": "cv-tradesman"
      },
      {
          "year": 2016,
          "make": "ram",
          "model": "promaster-cargo-van"
      },
      {
          "year": 2016,
          "make": "ram",
          "model": "promaster-city"
      },
      {
          "year": 2016,
          "make": "ram",
          "model": "promaster-window-van"
      },
      {
          "year": 2016,
          "make": "rolls-royce",
          "model": "dawn"
      },
      {
          "year": 2016,
          "make": "rolls-royce",
          "model": "ghost-series-ii"
      },
      {
          "year": 2016,
          "make": "rolls-royce",
          "model": "phantom"
      },
      {
          "year": 2016,
          "make": "rolls-royce",
          "model": "phantom-coupe"
      },
      {
          "year": 2016,
          "make": "rolls-royce",
          "model": "phantom-drophead-coupe"
      },
      {
          "year": 2016,
          "make": "rolls-royce",
          "model": "wraith"
      },
      {
          "year": 2016,
          "make": "scion",
          "model": "fr-s"
      },
      {
          "year": 2016,
          "make": "scion",
          "model": "ia"
      },
      {
          "year": 2016,
          "make": "scion",
          "model": "im"
      },
      {
          "year": 2015,
          "make": "scion",
          "model": "iq"
      },
      {
          "year": 2016,
          "make": "scion",
          "model": "tc"
      },
      {
          "year": 2015,
          "make": "scion",
          "model": "xb"
      },
      {
          "year": 2016,
          "make": "subaru",
          "model": "brz"
      },
      {
          "year": 2016,
          "make": "subaru",
          "model": "crosstrek"
      },
      {
          "year": 2016,
          "make": "subaru",
          "model": "forester"
      },
      {
          "year": 2016,
          "make": "subaru",
          "model": "legacy"
      },
      {
          "year": 2016,
          "make": "subaru",
          "model": "outback"
      },
      {
          "year": 2016,
          "make": "subaru",
          "model": "wrx"
      },
      {
          "year": 2015,
          "make": "subaru",
          "model": "xv-crosstrek"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "4runner"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "avalon"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "avalon-hybrid"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "camry"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "camry-hybrid"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "corolla"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "highlander-hybrid"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "land-cruiser"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "mirai"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "prius"
      },
      {
          "year": 2015,
          "make": "toyota",
          "model": "prius-plug-in"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "prius-c"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "prius-v"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "rav4"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "rav4-hybrid"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "sequoia"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "sienna"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "tacoma"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "tundra"
      },
      {
          "year": 2015,
          "make": "toyota",
          "model": "venza"
      },
      {
          "year": 2016,
          "make": "toyota",
          "model": "yaris"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "beetle"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "beetle-convertible"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "cc"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "eos"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "golf"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "golf-gti"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "golf-r"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "golf-sportwagen"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "jetta"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "passat"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "touareg"
      },
      {
          "year": 2016,
          "make": "volkswagen",
          "model": "e-golf"
      },
      {
          "year": 2016,
          "make": "volvo",
          "model": "s60"
      },
      {
          "year": 2016,
          "make": "volvo",
          "model": "s80"
      },
      {
          "year": 2016,
          "make": "volvo",
          "model": "v60"
      },
      {
          "year": 2016,
          "make": "volvo",
          "model": "v60-cross-country"
      },
      {
          "year": 2016,
          "make": "volvo",
          "model": "xc60"
      },
      {
          "year": 2016,
          "make": "volvo",
          "model": "xc70"
      },
      {
          "year": 2016,
          "make": "volvo",
          "model": "xc90"
      }
    ]    

// function get_years() {
//     var years = carData.map(data => data.year);
//     return years;
// }

//Maps an array containing only the 'make' value from carData
//The 'make' value has the first letter uppercased and the remaining characters are appended back to the end of the word
//Then all duplicates are removed using Set and puts the unique values back into an array using '...'
function car_makes() {
    var makes = [...new Set(cars.map(data => data.make))];
    return makes;
}

module.exports = { cars, car_makes };
