<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
<!-- TIP: Connects this page to the CSS file that controls its appearance. -->
<link rel="stylesheet" href="styles.css">
<title>Personalities and Professions</title>
</head>
<body>
<h1>Welcome to Dan's Personalities and Professions</h1>
<h3>Answer the following questions and our system will match you to a profession.</h3>
<div id="questionnaire">
<!-- TIP: Starts the form. action= says which file receives the data; method= sends it using GET. -->
<form method="get" action="index.php">
    <!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
    <input type="hidden" name="action" value="results">
<ol>
<li>Where do you prefer to workout?</li>
<!-- TIP: Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
<input type="radio" name="workout_location" value="country_club" checked>The country club
<!-- TIP: Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
<input type="radio" name="workout_location" value="outside">Outside
<!-- TIP: Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
<input type="radio" name="workout_location" value="no_workout">I would rather eat potato chips <br/><br/>   
     
<li>Check all the recreation activities you want to pursue in your life?</li>
<!-- TIP: The [] in the name lets multiple checked values arrive in PHP as an array. -->
<input type="checkbox" name="activities[]" value="wake_surfing">Wake Surfing <br/>
<!-- TIP: The [] in the name lets multiple checked values arrive in PHP as an array. -->
<input type="checkbox" name="activities[]" value="snowmobiling">Snowmobiling<br/>
<!-- TIP: The [] in the name lets multiple checked values arrive in PHP as an array. -->
<input type="checkbox" name="activities[]" value="reading">Reading<br/>
<!-- TIP: The [] in the name lets multiple checked values arrive in PHP as an array. -->
<input type="checkbox" name="activities[]" value="extreme_hiking">Extreme Hiking<br/>
<!-- TIP: The [] in the name lets multiple checked values arrive in PHP as an array. -->
<input type="checkbox" name="activities[]" value="visiting_foreign_countries">Visiting Foreign Countries<br/>
<!-- TIP: The [] in the name lets multiple checked values arrive in PHP as an array. -->
<input type="checkbox" name="activities[]" value="motorcycle_tours">Motorcycle tours of the US<br/><br/>
        
<li>Type your favorite boys name.</li>
<!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
<input type="text" name="boys_name" id=""> <br/><br/>
<li>Type your favorite girls name.</li> 
<!-- TIP: The name= value is the key PHP uses later with filter_input(). -->
<input type="text" name="girls_name" id=""> <br/><br/>
<li>Describe one of your talents.</li>
<!-- TIP: A textarea collects longer text; its name= is the key PHP uses to retrieve it. -->
<textarea name="talents" id="" cols="30" rows="10"></textarea> <br/><br/>

<li>Which of the following are you most likely to do? </li>
<select name="likely_task" id="" >
<option value="tanning">Go to a tanning salon</option>
<option value="hgh">Take human growth hormone (HGH)</option>
<option value="stitch">Stitch up your own finger</option>
</select><br/><br/>

 <li>Select all the TV shows you like.</li>
<!-- TIP: multiple lets the user select more than one option; the [] name sends them as an array. -->
<select name="tv_shows[]" size="9" multiple>
 <option value="house">House</option>
 <option value="breakingbad">Breaking Bad</option>
 <option value="housewives">Housewives of Beverly Hills</option>
 <option value="greysanatomy">Grey’s Anatomy</option>
 <option value="ncis">NCIS</option>
 <option value="csi">CSI: New York</option>
 <option value="chicagohope">Chicago Hope</option>
 <option value="thebachelor">The Bachelor</option>
 <option value="survivor">Survivor</option>
</select><br/><br/>
<input type="submit" value="submit">
</ol>
</form>
</div>
<!-- TIP: href tells the browser which page to open when this link is clicked. -->
<a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>
