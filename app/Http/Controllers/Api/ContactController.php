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
          $username = env('MAIL_USERNAME');
          Mail::send([], [], function ($message) use ($request, $username) {
                $message->from($username)
                        ->to($username)
                        ->subject($request->input('params.name') . ' - Contact Inquiry')
                        ->setBody($request->input('params.content') . '<br/> - ' . $request->input('params.email'), "text/html");
          });
    }

  
}
