//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { fromApiToDb } = require("./src/controllers/countryController");
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  //puerto es 3001
  //async for bring me the countries to de database
  server.listen(process.env.PORT, () => {
    console.log("%s Cargando los paises...");
    // const preload = await fromApiToDb();
    // console.log("%s " + preload);
    console.log("%s listening at 3001");
  });
});
