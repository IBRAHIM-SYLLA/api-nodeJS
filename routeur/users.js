var express = require('express');
var router = express.Router();

router.post("/login", function(req,res){
    // se connecter
    res.send('On se connecte...')
});

router.post("/register", (req,res) => {
    // s'inscrire
    res.send('On sinscrit...')
});

router.get("/allUsers", (req,res) => {
    // recup all Users
    res.send('On recup tout les users...')
});

router.get("/:id", (req,res) => {
    // recup One User
    res.send('On recup 1 user...')
});

router.get("/myProfil", (req,res) => {
    // recup mes infos
    res.send('je recup mon profil...')
});

router.put("/myProfil", (req,res) => {
    // modifier ses infos
    res.send('Je modifie mes infos...')
});

router.delete("/:id", (req,res) => {
    // supprimer un user
    res.send('On supprime 1 user...')
});

router.put("/:id", (req,res) => {
    // modifier les infos d'un user
    res.send('On modifie un user...')
});

module.exports = router;