<!DOCTYPE html>
<html lang="en">
<head>
    <!--  Connects this page to the CSS file that controls its appearance. -->
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <h1>Welcome to Zach R's Personalities and Professions</h1>
    <h3>Answer the following questions and our system will match you to a profession.</h3>

    <div id="questionnaire">
        <!--  Starts the form. action= says which file receives the data; method= sends it using GET. -->
        <form method="get" action="results.php">
            <ol>

                <li>Where do you prefer to workout?</li>
                    <!--  Radio buttons sharing the same name belong to one group; the selected button sends its value. -->
                    <input type="radio" name="workout_location" value="country_club">The Country Club
                    <input type="radio" name="workout_location" value="outside">Outside
                    <input type="radio" name="workout_location" value="potato">I would rather eat potato chips than workout<br/><br/>

                <li>Check all the recreation activities you want to pursue in your life?</li>
                    <!--  The [] in the name lets multiple checked values arrive in PHP as an array. -->
                    <input type="checkbox" name="activities[]" value="wake_surfing">Wake surfing<br/>
                    <input type="checkbox" name="activities[]" value="snowmobiling">Snowmobiling<br/>
                    <input type="checkbox" name="activities[]" value="reading">Reading<br/>
                    <input type="checkbox" name="activities[]" value="extreme_hiking">Extreme hiking<br/>
                    <input type="checkbox" name="activities[]" value="visiting_foreign_countries">Visiting foreign countries<br/>
                    <input type="checkbox" name="activities[]" value="motorcycle_tours">Motorcycle tours of the US<br/><br/>

                <li>Type your favorite boys name.</li>
                    <!--  The name= value is the key PHP uses later with filter_input(). -->
                    <input type="text" name="boys_name" placeholder="enter name"><br/><br/>

                <li>Type your favorite girls name.</li>
                    <input type="text" name="girls_name" placeholder="enter name"><br/><br/>

                <li>Describe one of your talents.</li>
                    <!--  A textarea collects longer text; its name= is the key PHP uses to retrieve it. -->
                    <textarea name="talents" cols="30" rows="8"></textarea><br/><br/>

                <li>Which of the following are you most likely to do?</li>
                    <select name="likely_task">
                        <option value="tanning">Go to a tanning salon</option>
                        <option value="hgh">Take human growth hormone (HGH)</option>
                        <option value="stitch">Stitch up your own finger</option>
                    </select><br/><br/>

                <li>Select all the TV shows you like.</li>
                    <!--  multiple lets the user select more than one option; the [] name sends them as an array. -->
                    <select name="tv_shows[]" multiple>
                        <option value="house">House</option>
                        <option value="breaking_bad">Breaking Bad</option>
                        <option value="housewives">Housewives of Beverly Hills</option>
                        <option value="greys_anatomy">Grey's Anatomy</option>
                        <option value="ncis">NCIS</option>
                        <option value="csi">CSI: New York</option>
                        <option value="chicago_hope">Chicago Hope</option>
                        <option value="bachelor">The Bachelor</option>
                        <option value="survivor">Survivor</option>
                    </select>

                <input type="submit" value="submit">

            </ol>
        </form>
    </div>

</body>
</html>