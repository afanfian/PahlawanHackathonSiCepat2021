import Feedbacks from "../models/FeedbackModel.js";

export const getFeedbacks = async(req, res) => {
    try {
        const feedbacks = await Feedbacks.findAll({
            attributes: ['star', 'name', 'message']
        });
        res.json(feedbacks);
    } catch (error) {
        console.log(error);
    }
}

export const addFeedbacks = async(req, res) => {
    const { star, name, message } = req.body;
    try {
        await Feedbacks.create({
            star: star,
            name: name,
            message: message
        });
        res.json({msg: "Feedback sent successfully."});
    } catch (error) {
        console.log(error);
    }
}