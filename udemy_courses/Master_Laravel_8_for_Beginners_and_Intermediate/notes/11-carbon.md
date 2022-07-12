https://carbon.nesbot.com/docs/

### ----- Carbon::diffForHumans
```php 

echo Carbon::tomorrow()->diffForHumans();
// 5 hours from now

echo Carbon::tomorrow()->diffForHumans(['parts' => 2]);
// 5 hours 38 seconds from now

echo Carbon::tomorrow()->diffForHumans(['parts' => 3, 'join' => true]);
// 5 hours and 38 seconds from now

echo Carbon::tomorrow()->diffForHumans(Carbon::yesterday());
// 2 days after

echo Carbon::tomorrow()->diffForHumans(Carbon::yesterday(), ['short' => true]);
// 2d after
```


### ----- Carbon::diffInMinutes

```php

now()->diffInMinutes($post->created_at)  <  5

```