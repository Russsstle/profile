<?php

namespace App\Http\Controllers\Api;

use Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request)
    {
 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = array(
            'from' => env('MAIL_USERNAME'),
            'to' => env('MAIL_USERNAME'),
            'subject' =>$request->input('params.name'),
            'messagenote' => $request->input('params.content') . '<br/> - ' . $request->input('params.email'),
          );
          Mail::to($data['to'])->send(new ComposeMail($data));
        // $username = env('MAIL_USERNAME');
        // Mail::send([],[], function ($message) use ($request, $username) {
        //     $message->to($username)
        //             ->subject($request->input('params.name'))
        //             ->from($username)
        //             ->setBody($request->input('params.content') . '<br/> - ' . $request->input('params.email'), "text/html");
        //   }); 
    }

  
}
