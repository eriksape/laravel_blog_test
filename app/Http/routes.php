<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


get('/', function () {
    return view('template');
});

get('/token', function(Request $request){
  Session::regenerateToken();
  return [csrf_token(), $request->cookie('XSRF-TOKEN')];
});

resource( 'blog', 'BlogController', ['except'=>['create', 'show', 'edit']] );