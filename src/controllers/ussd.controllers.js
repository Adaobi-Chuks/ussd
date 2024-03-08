const ussdServices = require('../services/ussd.services');
const {
    find,
    create,
    getAll,
    edit
} = ussdServices

class USSDController {
    async ussd(req, res) {
        const {
            sessionId,
            serviceCode,
            phoneNumber,
            text
        } = req.body

        let response = ""

        if(text == "") {
            response = `CON What would you like to do?
            1. Vote for a Candidate
            2. View votes
            0. Exit`
        } else if(text == "1") {
            response = `CON Choose Candidate you want to vote for
            1. MARA
            2. NWEKE
            0. Exit`
        } else if(text == "2") {
            const votes = await getAll();
            let votess = "";
            votes.map((vote) => {
                votess =+ `
                ${vote.candidate} - ${vote.vote}`
            })
            response = `END Here are the recent votes${votess}`
        } else if(text == "0") {
            response = `END`
        } else if(text == "1*1") {
            const candidate = await find(1)
            const vote = await edit(1, {vote: candidate.vote + 1})
            response = `CON You have successfully voted for Mara
            1. View votes
            0. Exit`
        } else if(text == "1*2") {
            const candidate = await find(2)
            const vote = await edit(2, {vote: candidate.vote + 1})
            response = `CON You have successfully voted for Nweke
            1. View votes
            0. Exit`
        } else if(text == "1*0") {
            response = `END`
        } else if(text == "1*1*1") {
            const votes = await getAll();
            let votess = "";
            votes.map((vote) => {
                votess =+ `
                ${vote.candidate} - ${vote.vote}`
            })
            response = `END Here are the recent votes${votess}`
        } else if(text == "1*2*1") {
            const votes = await getAll();
            let votess = "";
            votes.map((vote) => {
                votess =+ `
                ${vote.candidate} - ${vote.vote}`
            })
            response = `END Here are the recent votes${votess}`
        } else if(text == "1*1*0") {
            response = `END`
        } else if(text == "1*2*0") {
            response = `END`
        }
    }

    async create(req, res) {
        const createdCandidate = await create(req.body);
        return res.status(201).send({ 
            success: true, 
            message: 'Candidate created successfully', 
            data: createdCandidate
        });

    }
}

module.exports = new USSDController();