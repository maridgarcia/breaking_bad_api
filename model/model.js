const connection = require("./connection");

const getAllInfo = async () => {
    const query = `SELECT CA.car AS car_name, CA.description AS descritption, CH.character_name AS owner FROM cars AS CA INNER JOIN car_owner AS CO ON CA.id = CO.car_id INNER JOIN characters AS CH ON CH.id = CO.character_id;`;

    const [results] = await connection.execute(query);

    return results;
}

module.exports = { getAllInfo };