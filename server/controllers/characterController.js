const masterCharacterList = []
id = 0

module.exports = {
    getAllCharacters: (req, res) => {
       const db = req.app.get('db')
       db.get_all_characters()
       .then(characters => res.status(200).send(characters))
       .catch(err => res.status(500).send(err))
    },
    getCharacter: (req, res) => {
        
    },
    addCharacter: (req, res) => {
        const db = req.app.get('db')
        const character = {...req.body}
        db.add_character(newCharacter)
        .then(newCharacter => res.status(200).send(newCharacter))
        .catch(err => res.status(500).send(err))
    },
    editCharacter: (req, res) => {
        
    },
    deleteCharacter: (req, res) => {
        
    }
}
