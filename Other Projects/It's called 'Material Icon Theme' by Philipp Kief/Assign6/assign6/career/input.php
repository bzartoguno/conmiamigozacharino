<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
<link rel="stylesheet" href="styles.css">
<title>Personalities and Professions</title>
</head>
<body>
<h1>Welcome to Dan's Personalities and Professions</h1>
<h3>Answer the following questions and our system will match you to a profession.</h3>
<div id="questionnaire">
<form method="get" action="index.php">
    <input type="hidden" name="action" value="results">
<ol>
<li>Where do you prefer to workout?</li>
<input type="radio" name="workout_location" value="country_club" checked>The country club
<input type="radio" name="workout_location" value="outside">Outside
<input type="radio" name="workout_location" value="no_workout">I would rather eat potato chips <br/><br/>   
     
<li>Check all the recreation activities you want to pursue in your life?</li>
<input type="checkbox" name="activities[]" value="wake_surfing">Wake Surfing <br/>
<input type="checkbox" name="activities[]" value="snowmobiling">Snowmobiling<br/>
<input type="checkbox" name="activities[]" value="reading">Reading<br/>
<input type="checkbox" name="activities[]" value="extreme_hiking">Extreme Hiking<br/>
<input type="checkbox" name="activities[]" value="visiting_foreign_countries">Visiting Foreign Countries<br/>
<input type="checkbox" name="activities[]" value="motorcycle_tours">Motorcycle tours of the US<br/><br/>
        
<li>Type your favorite boys name.</li>
<input type="text" name="boys_name" id=""> <br/><br/>
<li>Type your favorite girls name.</li> 
<input type="text" name="girls_name" id=""> <br/><br/>
<li>Describe one of your talents.</li>
<textarea name="talents" id="" cols="30" rows="10"></textarea> <br/><br/>

<li>Which of the following are you most likely to do? </li>
<select name="likely_task" id="" >
<option value="tanning">Go to a tanning salon</option>
<option value="hgh">Take human growth hormone (HGH)</option>
<option value="stitch">Stitch up your own finger</option>
</select><br/><br/>

 <li>Select all the TV shows you like.</li>
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
<a href="/assign6/index.php">Back to Carnival Home</a>
</body>
</html>
