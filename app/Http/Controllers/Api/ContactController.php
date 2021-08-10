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
        Mail::send('emails.contact_mail', compact('request'), function ($message) use ($request) {
            $message->to(env('MAIL_USERNAME'))
                    ->subject($request->input('params.name'))
                    ->from(env('MAIL_USERNAME'))
                    ->setBody($request->input('params.content') . '<br/> - ' . $request->input('params.email'), "text/html");
          }); 
    }

  
}
