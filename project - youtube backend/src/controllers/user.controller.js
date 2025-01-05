import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //*  get user details from frontend

  //* validation - not empty

  //*  check if user already exists: username or email

  //* chek for images, check for avatar

  //* upload them onto cloudinary, avatar

  //* create user object - create entry in DB

  //* removed password and refresh token field from response

  //* check for user creation

  //* return user

  // Extract user details from the request body
  const { fullName, username, email, password } = req.body;
  // console.log("email", email);

  // Validate that none of the required fields are empty
  if (
    [fullName, username, email, password].some((field) => field?.trim() == "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if a user with the given username or email already exists in the database
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  // If user already exists, throw a error
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists!");
  }

  // Extract file paths from the uploaded files for avatar and cover image
  const avatarLocalPath = req.files?.avatar[0]?.path;
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;

  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path
  }

  // console.log(req.files)

  // Validate that the avatar file is provided
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // Upload the avatar and  cover image to Cloudinary (if provided)
  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  // Check if the avatar upload was successful
  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  // Create a new user object in the database
  const user = await User.create({
    fullName,
    avatar: avatar.url, // Store the Cloudinary URL for the avatar
    coverImage: coverImage?.url || "", // Store the Cloudinary URL for the cover image or an empty string
    username: username.toLowerCase(), // Convert the username to lowercase for consistency
    email,
    password,
  });

  // console.log(user)

  // Find the newly created user and remove sensitive fields (password, refreshToken) from the response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // Check if the user creation was successful
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  // Return a successful response with the created user data
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export default registerUser;
