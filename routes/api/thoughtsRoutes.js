const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/users/friends
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;    