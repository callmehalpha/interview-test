<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function __construct() {
        $this->middleware('api', ['except' => ['login', 'register']]);
    }


    public function register(Request $request)
    {
        //Validate data
        $data = $request->only('email', 'password');
        $validator = Validator::make($data, [
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|max:50'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is valid, create new user
//        DB::beginTransaction();
        try {
            $user = User::create([
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);

//            DB::table('students')->insert([
//                'firstname' => $request->firstname,
//                'lastname' => $request->lastname,
//                'gender' => $request->gender,
//                'user_id' => $user->id,
//            ]);

//            DB::commit();
            //User created, return success response
            return response()->json([
                'success' => true,
                'message' => 'User created successfully',
                'data' => $user
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
//            DB::rollback();
            throw($e);
        }


    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        //valid credential
        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        //Request is validated
        try {
            if ($token = JWTAuth::attempt($credentials)) {
                //Token created, return with success response and jwt token
                return response()->json([
                    'success' => true,
                    'token' => $token,
                ]);
            }
            return response()->json([
                'error' => ['email' => 'Login credentials are invalid.']
            ], 400);
        } catch (JWTException $e) {
            return response()->json([
                'error' => ['email' => 'Could not create token.'],
            ], 500);
        }

    }

    public function logout(Request $request)
    {
        //valid credential
        $validator = Validator::make($request->only('token'), [
            'token' => 'required'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is validated, do logout
        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User has been logged out'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

    public function get_user(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        $user = JWTAuth::authenticate($request->token);

        return response()->json(['user' => $user]);
    }
}
