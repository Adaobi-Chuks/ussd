const USSD = require('../models/ussd.models');

class USSDService {
    // finds a ussd by serialNumber
    async find(num) {
        return await USSD.findOne({serialNumber: num}, "-__v");
    }

    //create ussd
    async create(data) {
        const ussd = await USSD.create(data);
        return ussd;
    }

    //get all ussds
    async getAll() {
        return await USSD.find({}, "-__v").sort({ createdAt: 'desc' });
    }

    //edit ussd details with id
    async edit(num, data) {
        return await USSD.findOneAndUpdate({serialNumber: num}, { $set: data }, { new: true }).select("-__v");
    }
}

module.exports=new USSDService()