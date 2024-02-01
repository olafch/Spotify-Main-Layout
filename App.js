import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { UpperTopSpotify } from "./components/UpperTopSpotify/UpperTopSpotify";
import { ContentButtons } from "./components/ContentButtons/ContentButtons";
import { RecommendationsPart } from "./components/RecommendationsPart/RecommendationsPart";
import { FullReelsPart } from "./components/FullReelsPart/FullReelsPart";
import { MainMenuButtonGroup } from "./components/MainMenuButtonGroup/MainMenuButtonGroup";

export default function App() {
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll>
        <UpperTopSpotify />
        <ContentButtons />
        <RecommendationsPart />
        {Object.keys(reelInside).map(function (title, index) {
          return (
            <FullReelsPart
              key={index}
              reelsTitle={title}
              reelsData={reelInside[title]}
            />
          );
        })}
      </ScrollView>
      <MainMenuButtonGroup buttons={["Home", "Search", "Your Library"]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flexGrow: 1,
    backgroundColor: "#0f0f0fff",
  },
});

const reelInside = {
  "Icons of Black LGBTQ+ Music": [
    [
      "",
      "Jason King, host of Sound Barrier, shares with the public all his virtues",
    ],
    ["A Night at the Opera", "Sound Barrier: Sylvester"],
    ["Jason Smith", "Heat Road towards happiness"],
    ["Eros Ramazzotti", "Un'altra te"],
    ["Elton John", "I'm still Standing"],
    ["Halsey", "Badlands and Manic"],
    ["Kim Petras", "I Don’t Want it at All"],
  ],
  "Your top mixes": [
    ["", "Drake, Travis Scott, 21 Savage, Eminem"],
    ["", "Keep your workout 100 with these Hip-Hop motivators."],
    ["", "Songs that you liked"],
    ["", "Chillin' 🍸"],
    ["", "Hans Zimmer, Ludovico Einaudi"],
    ["", "Someone's said weekend?"],
  ],
  "Recently listened": [
    ["Sencillo · Quevedo", "Piel de Cordero"],
    ["Tom Petty", "Love Is A Long Road"],
    ["David Kushner", "Daylight"],
    ["Beyoncé", "Halo"],
    ["Ed Sheeran", "Shape of You"],
    ["Adele", "Hello"],
    ["Taylor Swift", "Blank Space"],
    ["Drake", "Hotline Bling"],
    ["Rihanna", "Umbrella"],
    ["Justin Bieber", "Sorry"],
    ["Ariana Grande", "No Tears Left to Cry"],
    ["The Weeknd", "Blinding Lights"],
    ["Bruno Mars", "Uptown Funk"],
    ["Katy Perry", "Firework"],
    ["Coldplay", "Fix You"],
    ["Eminem", "Lose Yourself"],
    ["Shakira", "Hips Don't Lie"],
    ["Maroon 5", "Sugar"],
    ["Post Malone", "Rockstar"],
    ["Sia", "Cheap Thrills"],
    ["Imagine Dragons", "Radioactive"],
    ["Lady Gaga", "Bad Romance"],
    ["Michael Jackson", "Billie Jean"],
  ],
  "Popular albums for you": [
    ["Beyoncé", "Lemonade"],
    ["Ed Sheeran", "÷ (Divide)"],
    ["Adele", "21"],
    ["Taylor Swift", "1989"],
    ["Drake", "Scorpion"],
    ["Rihanna", "Anti"],
    ["Justin Bieber", "Purpose"],
    ["Ariana Grande", "Sweetener"],
    ["The Weeknd", "After Hours"],
    ["Bruno Mars", "24K Magic"],
    ["Katy Perry", "Teenage Dream"],
    ["Coldplay", "A Head Full of Dreams"],
    ["Eminem", "Recovery"],
    ["Shakira", "El Dorado"],
    ["Maroon 5", "V"],
  ],
  "What you can't miss": [
    ["Adele", "Easy On Me"],
    ["The Weeknd", "Save Your Tears"],
    ["Ed Sheeran", "Bad Habits"],
    ["Dua Lipa", "Levitating"],
    ["Doja Cat", "Kiss Me More"],
    ["Olivia Rodrigo", "Good 4 U"],
    ["Justin Bieber", "Peaches"],
    ["Billie Eilish", "Happier Than Ever"],
    ["Drake", "Way 2 Sexy"],
    ["Lil Nas X", "Montero (Call Me By Your Name)"],
    ["Taylor Swift", "All Too Well (10 Minute Version)"],
    ["Bruno Mars, Anderson .Paak", "Leave The Door Open"],
    ["Travis Scott", "Goosebumps"],
    ["Kendrick Lamar", "HUMBLE."],
    ["SZA", "Good Days"],
    ["Kanye West", "Hurricane"],
    ["Ariana Grande", "positions"],
    ["BTS", "Butter"],
    ["Glass Animals", "Heat Waves"],
    ["Masked Wolf", "Astronaut in the Ocean"],
    ["The Kid LAROI", "Stay"],
    ["Silk Sonic (Bruno Mars, Anderson .Paak)", "Smokin Out The Window"],
    ["Harry Styles", "Watermelon Sugar"],
    ["Post Malone", "Circles"],
    ["Megan Thee Stallion", "Thot Shit"],
    ["Billie Eilish", "Therefore I Am"],
    ["24kGoldn", "Mood"],
    ["Olivia Rodrigo", "Deja Vu"],
    ["Machine Gun Kelly", "My Ex's Best Friend"],
    ["Cardi B", "Up"],
    ["Doja Cat", "Say So"],
    ["Rihanna", "Stay"],
    ["The Weeknd", "Blinding Lights"],
    ["Lil Nas X", "Industry Baby"],
    ["Adele", "Someone Like You"],
    ["Justin Bieber", "Holy"],
    ["Ariana Grande", "34+35"],
    ["Polo G", "Rapstar"],
    ["The Kid LAROI", "Without You"],
    ["Bad Bunny", "Yonaguni"],
  ],
  "The most listened artists of 2023": [
    ["Taylor Swift"],
    ["Bad Bunny"],
    ["The Weeknd"],
    ["Drake"],
    ["Peso Pluma"],
    ["Feid"],
    ["Travis Scott"],
    ["SZA"],
    ["Karol G"],
    ["Lana Del Rey"],
  ],
};
