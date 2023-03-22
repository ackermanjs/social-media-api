const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  removeFriends,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/friends
router.route('/:userId/friends/:friendId').delete(removeFriends).post(addFriends);

module.exports = router;