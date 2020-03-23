const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema(
	{
		follow_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // person following
		leader_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // person being followed
	},
	{ collection: 'Follow' }
);

module.exports = mongoose.model('Follow', FollowSchema);
