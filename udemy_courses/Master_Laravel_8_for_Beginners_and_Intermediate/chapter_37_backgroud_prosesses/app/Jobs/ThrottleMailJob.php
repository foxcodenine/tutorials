<?php

namespace App\Jobs;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;

class ThrottleMailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $mail;
    public $user;

    public $tries = 10;
    public $timeout = 60;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Mailable $mail, User $user)
    {
        $this->mail = $mail;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Redis::throttle('mailtrap')->allow(1)->every(10)->then(
            function () {
                // Job logic...
                Mail::to($this->user)->send($this->mail);
            },
            function () {
                // Could not obtain lock...
                return $this->release(4);
            }
        );
    }
}
