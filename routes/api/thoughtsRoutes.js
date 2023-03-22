const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReactions,
  removeReactions,
} = require('../../controllers/userController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/users
router.route('/:thoughtId').get(getSingleThoughts).delete(deleteUser).put(updateThoughts);

// /api/users/friends
router.route('/:thoughtId/reactions').post(addReactions);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReactions);

module.exports = router;    