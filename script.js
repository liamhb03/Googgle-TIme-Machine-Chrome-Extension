window.onload = replacer;

var html = 
    '<! –– Congrats! You found the hidden message! Liam H.B. was here on April 1st, 2022. ––>' +
    '<center>' +
    '<img src="/google.jpg" width="351" height="113" alt="Google!">' +
    '</center>' +
    '<center>' +
    '<table border="0" width="90%">' +
    '<tbody><tr>' +
    '<td bgcolor="#EEEEEE" colspan="3">' +
    '<form method="GET" action="/search">' +
    '<center>' +
    'Search the web using Google!<br>' +
    '<input type="text" name="q" value="" size="40"><br>' +
    '<input type="submit" value="Google Search">' +
    '<input type="submit" name="sa" value="I\'m feeling lucky"><br>' +
    '</center>' +
    '</form>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="37%" bgcolor="#7EE5DA"><center>' +
    'Special Searches<br>' +
    '<a href="/web/19990117032727/http://www.google.com/stanford">Stanford Search</a><br>' +
    '<a href="/web/19990117032727/http://www.google.com/linux">Linux Search</a><br>' +
    '</center></td>' +
    '<td bgcolor="#70CCC2"><center><font size="-1">' +
    '<a href="about.html">Why use Google!</a><br>' +
    '<a href="press.html">Press about Google!</a><br>' +
    '<a href="help.html">Help!</a><br>' +
    '<a href="company.html">Company Info</a><br>' +
    '<a href="jobs.html">Jobs at Google</a><br>' +
    '<a href="stickers.html">Google! Logos</a><br>' +
    '<a href="defaults.html">Making Google! the Default</a><br>' +
    '</font></center></td>' +
    '<td align="right" bgcolor="#62B3AA"><center><font size="-1">' +
    '</font><form method="GET" action=""><font size="-1">' +
    'Get Google!<br>updates monthly:<br>' +
    '<input type="hidden" name="listname" value="google-friends">' +
    '<input type="text" name="emailaddr" value="your e-mail"><br>' +
    '<input type="submit" name="SubmitAction" value="Subscribe"> ' +
    '&nbsp;&nbsp;' +
    '<font size="-1"><a href="">Archive</a></font>' +
    '</font></form></center></td>' +
    '</tr></tbody></table>' +
    '</center>' +
    '<p>' +
    '</p>' +
    '<center><font size="-1">Copyright ©1999 Google Inc.</font></center>';

    function replacer() {
        var url = window.location.href;
        if (url.indexOf("google.com") > -1 && url.indexOf("search") == -1) {
          document.body.innerHTML = html;
        }
      }