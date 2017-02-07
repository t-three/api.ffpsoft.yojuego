let createPlayer = (client) => {
    return client.indices.putMapping({
        index: 'yojuego',
        type: 'player',
        body: {
            properties: {
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                nickName: { type: 'string' },
                email: { type: 'string', index: 'not_analyzed' },
                photo: { type: 'string' },
                phone: { type: 'string', index: 'not_analyzed' },
                userid: { type: 'string', index: 'not_analyzed' },
                playerAudit: {
                    createdBy: { type: 'string', index: 'not_analyzed' },
                    createdOn: { type: 'date' },
                    createdFrom: { type: 'string' },
                    modifiedBy: { type: 'string', index: 'not_analyzed' },
                    modifiedOn: { type: 'date' },
                    modifiedFrom: { type: 'string' }
                }
            }
        }
    });
}

module.exports = createPlayer;