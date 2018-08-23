const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Scrumboard = new Schema({
    board: {
        id: String,
        uri: String,
        setting: {
            color: String,
            subscribed: Boolean,
            cardCoverImages: Boolean
        },
        list: [{
            id: String,
            name: String,
            idCards: [
                String
            ]
        }],
        cards: [{
            id: String,
            name: String,
            description: String,
            idAttachmentCover: String,
            idMembers: [
                String
            ],
            idLabels: [
                String
            ],
            attachments: [
                {
                    id: String,
                    name: String,
                    src: String,
                    time: String,
                    type: String
                }

            ],
            subscribed: Boolean,
            checklists: [
                {
                    id: String,
                    name: String,
                    checkItemsChecked: Number,
                    checkItems: [
                        {
                            name: String,
                            checked: Boolean
                        }
                    ]
                    

                }
            ],
            checkItems: Number,
            checkItemsChecked: Number,
            comments: [
                {
                    idMember: String,
                    message: String,
                    time: String 
                }
            ],
            activities:  [
                {
                    idMember: String,
                    message: String,
                    time: String 
                }

            ],
            due: String    

        }],
        members: [{
            id: String,
            name: String,
            avatar: String
        }],
        label: [{
            id: String,
            name: String,
            color: String
        }]
    }

},
{
    collection : 'scrumboards'
});

module.exports = mongoose.model('Scrumboard',Scrumboard );