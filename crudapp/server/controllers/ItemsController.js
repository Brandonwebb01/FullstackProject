//establish a connection to DB here
const db = require("../connection");

module.exports = {
    index(req, res) {
        db.query(`SELECT * FROM items`, (err, results)=>{
            if (err) return res.sendStatus(500);
            return res.send({ entries1: results });
        });
    },
    store(req, res) {
        db.query(`INSERT INTO items (name) VALUES (?)`, [req.body.entry.name], (err, result)=>{
            console.log("result: " + JSON.stringify(result));
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM items`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries1: results });
            });
        });
    }, 
    update(req, res){
        db.query(`UPDATE categories SET name=? WHERE categories_id=?`, [req.body.entry.name, req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM items`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries1: results });
            });
        });
    },
    destroy(req, res){
        db.query(`DELETE FROM items WHERE item_id=?`, [req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM items`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries1: results });
            });
        });
    }
};