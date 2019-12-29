import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import PlayerList from 'static/components/PlayerList';
import UserTable from 'static/components/UserTable';
import { StoreState } from "types/state";
import { connect } from "react-redux";
import { orange, grey } from 'shared/styles/colors';

interface Props {
    match: any;
    dispatch: any;
    home: { users: Array<any>}
}

interface State {
    users: any,
    numberOfPicks: number,
    players: Array<any>,
    currentPicker: number,
    lastFirstPick: number,
}

class Draft extends Component<Props, State> {
    private constructor(props) {
        super(props);
        this.state = {
            users: [{
                id: 1,
                name: 'Axel',
                players: [
                    { id: 1, name: "LeBron James", team: "LAL", rating: 97, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/LeBron-James-2K.png" },
                    { id: 2, name: "Giannis Antetokounmpo", team: "MIL", rating: 97, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Giannis-Antetokounmpo.png" },
                    { id: 38, name: "Brandon Ingram", team: "NOP", rating: 85, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Brandon-Ingram.png" },
                { id: 39, name: "C.J. McCollum", team: "POR", rating: 85, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/CJ-McCollum.png" },
                ]
            },
            {
                id: 2,
                name: 'Michiel',
                players: [
                    { id: 3, name: "James Harden", team: "HOU", rating: 97, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/James-Harden.png" },
                { id: 4, name: "Anthony Davis", team: "LAL", rating: 96, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Anthony-Davis.png" },
                { id: 14, name: "Jimmy Butler", team: "MIA", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Jimmy-Butler-2K.png" },
                { id: 17, name: "Klay Thompson", team: "GSW", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Klay-Thompson.png" },
                ]
            },
            {
                id: 3,
                name: 'Jan',
                players: [
                    { id: 3, name: "James Harden", team: "HOU", rating: 97, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/James-Harden.png" },
                { id: 4, name: "Anthony Davis", team: "LAL", rating: 96, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Anthony-Davis.png" },
                { id: 14, name: "Jimmy Butler", team: "MIA", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Jimmy-Butler-2K.png" },
                { id: 17, name: "Klay Thompson", team: "GSW", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Klay-Thompson.png" },
                ]
            },
            {
                id: 4,
                name: 'Leander',
                players: [
                    { id: 3, name: "James Harden", team: "HOU", rating: 97, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/James-Harden.png" },
                { id: 4, name: "Anthony Davis", team: "LAL", rating: 96, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Anthony-Davis.png" },
                { id: 14, name: "Jimmy Butler", team: "MIA", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Jimmy-Butler-2K.png" },
                { id: 17, name: "Klay Thompson", team: "GSW", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Klay-Thompson.png" },
                ]
            },
            ],
            players: [
                { id: 1, name: "LeBron James", team: "LAL", rating: 97, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/LeBron-James-2K-33x33.png" },
                { id: 2, name: "Giannis Antetokounmpo", team: "MIL", rating: 97, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Giannis-Antetokounmpo-2K-33x33.png" },
                { id: 3, name: "James Harden", team: "HOU", rating: 97, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/James-Harden-2K-33x33.png" },
                { id: 4, name: "Anthony Davis", team: "LAL", rating: 96, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Anthony-Davis-2K-33x33.png" },
                { id: 5, name: "Kawhi Leonard", team: "LAC", rating: 96, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Kawhi-Leonard-2K-33x33.png" },
                { id: 6, name: "Kevin Durant", team: "BKN", rating: 96, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Kevin-Durant-2K-33x33.png" },
                { id: 7, name: "Luka Doncic", team: "DAL", rating: 96, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Luka-Doncic-2K-33x33.png" },
                { id: 8, name: "Stephen Curry", team: "GSW", rating: 95, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Stephen-Curry-2K-33x33.png" },
                { id: 9, name: "Paul George", team: "LAC", rating: 93, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Paul-George-2K-33x33.png" },
                { id: 10, name: "Damian Lillard", team: "POR", rating: 91, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Damian-Lillard-2K-33x33.png" },
                { id: 11, name: "Joel Embiid", team: "PHI", rating: 91, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Joel-Embiid-2K-33x33.png" },
                { id: 12, name: "Karl-Anthony Towns", team: "MIN", rating: 91, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Karl-Anthony-Towns-2K-33x33.png" },
                { id: 13, name: "Kyrie Irving", team: "BKN", rating: 91, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Kyrie-Irving-2K-33x33.png" },
                { id: 14, name: "Jimmy Butler", team: "MIA", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Jimmy-Butler-2K-33x33.png" },
                { id: 15, name: "Nikola Jokic", team: "DEN", rating: 89, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Nikola-Jokic-2K-33x33.png" },
                { id: 16, name: "Trae Young", team: "ATL", rating: 89, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Trae-Young-2K-33x33.png" },
                { id: 17, name: "Klay Thompson", team: "GSW", rating: 89, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Klay-Thompson-2K-33x33.png" },
                { id: 18, name: "Andre Drummond", team: "DET", rating: 88, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Andre-Drummond-2K-33x33.png" },
                { id: 19, name: "Bradley Beal", team: "WAS", rating: 88, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Bradley-Beal-2K-33x33.png" },
                { id: 20, name: "Donovan Mitchell", team: "UTA", rating: 88, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Donovan-Mitchell-2K-33x33.png" },
                { id: 21, name: "Kemba Walker", team: "BOS", rating: 88, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Kemba-Walker-2K-33x33.png" },
                { id: 22, name: "Pascal Siakam", team: "TOR", rating: 88, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Pascal-Siakam-2K-33x33.png" },
                { id: 23, name: "Russell Westbrook", team: "HOU", rating: 88, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Russell-Westbrook-2K-33x33.png" },
                { id: 24, name: "Al Horford", team: "PHI", rating: 87, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Al-Horford-2K-33x33.png" },
                { id: 25, name: "Ben Simmons", team: "PHI", rating: 87, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Ben-Simmons-2K-33x33.png" },
                { id: 26, name: "Devin Booker", team: "PHX", rating: 87, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Devin-Booker-2K-33x33.png" },
                { id: 27, name: "Rudy Gobert", team: "UTA", rating: 87, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Rudy-Gobert-2K-33x33.png" },
                { id: 28, name: "Victor Oladipo", team: "IND", rating: 87, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Victor-Oladipo-2K-33x33.png" },
                { id: 29, name: "Bam Adebayo", team: "MIA", rating: 86, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Bam-Adebayo-2K-33x33.png" },
                { id: 30, name: "Chris Paul", team: "OKC", rating: 86, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Chris-Paul-2K-33x33.png" },
                { id: 31, name: "Clint Capela", team: "HOU", rating: 86, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Clint-Capela-2K-33x33.png" },
                { id: 32, name: "Jayson Tatum", team: "BOS", rating: 86, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Jayson-Tatum-2K-33x33.png" },
                { id: 33, name: "John Wall", team: "WAS", rating: 86, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/John-Wall-2K-33x33.png" },
                { id: 34, name: "Khris Middleton", team: "MIL", rating: 86, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Khris-Middleton-2K-33x33.png" },
                { id: 35, name: "LaMarcus Aldridge", team: "SAS", rating: 86, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/LaMarcus-Aldridge-2K-33x33.png" },
                { id: 36, name: "Malcolm Brogdon", team: "IND", rating: 86, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Malcolm-Brogdon-2K-33x33.png" },
                { id: 37, name: "Tobias Harris", team: "PHI", rating: 86, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Tobias-Harris-2K-33x33.png" },
                { id: 38, name: "Brandon Ingram", team: "NOP", rating: 85, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Brandon-Ingram-2K-33x33.png" },
                { id: 39, name: "C.J. McCollum", team: "POR", rating: 85, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/CJ-McCollum-2K-33x33.png" },
                { id: 40, name: "D\u2019Angelo Russell", team: "GSW", rating: 85, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/DAngelo-Russell-2K-33x33.png" },
                { id: 41, name: "De\u2019Aaron Fox", team: "SAC", rating: 85, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/DeAaron-Fox-2K-33x33.png" },
                { id: 42, name: "DeMar DeRozan", team: "SAS", rating: 85, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/DeMar-DeRozan-2K-33x33.png" },
                { id: 43, name: "Eric Bledsoe", team: "MIL", rating: 85, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Eric-Bledsoe-2K-33x33.png" },
                { id: 44, name: "Hassan Whiteside", team: "POR", rating: 85, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Hassan-Whiteside-2K-33x33.png" },
                { id: 45, name: "Jaylen Brown", team: "BOS", rating: 85, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Jaylen-Brown-2K-33x33.png" },
                { id: 46, name: "Kristaps Porzingis", team: "DAL", rating: 85, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Kristaps-Porzingis-2K-33x33.png" },
                { id: 47, name: "Kyle Lowry", team: "TOR", rating: 85, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Kyle-Lowry-2K-33x33.png" },
                { id: 48, name: "Montrezl Harrell", team: "LAC", rating: 85, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Montrezl-Harrell-2K-33x33.png" },
                { id: 49, name: "Nikola Vucevic", team: "ORL", rating: 85, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Nikola-Vucevic-2K-33x33.png" },
                { id: 50, name: "Zach LaVine", team: "CHI", rating: 85, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Zach-LaVine-2K-33x33.png" },
                { id: 51, name: "Andrew Wiggins", team: "MIN", rating: 84, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Andrew-Wiggins-2K-33x33.png" },
                { id: 52, name: "Blake Griffin", team: "DET", rating: 84, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Blake-Griffin-2K-33x33.png" },
                { id: 53, name: "Domantas Sabonis", team: "IND", rating: 84, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Domantas-Sabonis-2K-33x33.png" },
                { id: 54, name: "Ja Morant", team: "MEM", rating: 84, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Ja-Morant-2K-33x33.png" },
                { id: 55, name: "Jamal Murray", team: "DEN", rating: 84, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Jamal-Murray-2K-33x33.png" },
                { id: 56, name: "John Collins", team: "ATL", rating: 84, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/John-Collins-2K-33x33.png" },
                { id: 57, name: "Jrue Holiday", team: "NOP", rating: 84, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Jrue-Holiday-2K-33x33.png" },
                { id: 58, name: "Spencer Dinwiddie", team: "BKN", rating: 84, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Spencer-Dinwiddie-2K-33x33.png" },
                { id: 59, name: "Derrick Rose", team: "DET", rating: 84, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Derrick-Rose-2K-33x33.png" },
                { id: 60, name: "Danilo Gallinari", team: "OKC", rating: 83, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Danilo-Gallinari-2K-33x33.png" },
                { id: 61, name: "Deandre Ayton", team: "PHX", rating: 83, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Deandre-Ayton-2K-33x33.png" },
                { id: 62, name: "Devonte\u2019 Graham", team: "CHA", rating: 83, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Devonte-Graham-2K-33x33.png" },
                { id: 63, name: "Evan Fournier", team: "ORL", rating: 83, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Evan-Fournier-2K-33x33.png" },
                { id: 64, name: "Fred VanVleet", team: "TOR", rating: 83, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Fred-VanVleet-2K-33x33.png" },
                { id: 65, name: "Gordon Hayward", team: "BOS", rating: 83, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Gordon-Hayward-2K-33x33.png" },
                { id: 66, name: "Jusuf Nurkic", team: "POR", rating: 83, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Jusuf-Nurkic-2K-33x33.png" },
                { id: 67, name: "Lou Williams", team: "LAC", rating: 83, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Lou-Williams-2K-33x33.png" },
                { id: 68, name: "Marvin Bagley III", team: "SAC", rating: 83, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Marvin-Bagley-III-2K-33x33.png" },
                { id: 69, name: "Mitchell Robinson", team: "NYK", rating: 83, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Mitchell-Robinson-2K-33x33.png" },
                { id: 70, name: "Steven Adams", team: "OKC", rating: 83, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Steven-Adams-2K-33x33.png" },
                { id: 71, name: "Bojan Bogdanovic", team: "UTA", rating: 82, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Bojan-Bogdanovic-2K-33x33.png" },
                { id: 72, name: "Buddy Hield", team: "SAC", rating: 82, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Buddy-Hield-2K-33x33.png" },
                { id: 73, name: "Jaren Jackson Jr.", team: "MEM", rating: 82, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Jaren-Jackson-Jr.-2K-33x33.png" },
                { id: 74, name: "Jarrett Allen", team: "BKN", rating: 82, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Jarrett-Allen-33x33.png" },
                { id: 75, name: "Jeff Teague", team: "MIN", rating: 82, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Jeff-Teague-2K-33x33.png" },
                { id: 76, name: "Jonas Valanciunas", team: "MEM", rating: 82, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Jonas-Valanciunas-2K-33x33.png" },
                { id: 77, name: "Jonathan Isaac", team: "ORL", rating: 82, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Jonathan-Isaac-2K-33x33.png" },
                { id: 78, name: "Marcus Smart", team: "BOS", rating: 82, position: "SG", img_url: "https://www.2kratings.com//wp-content/uploads/Marcus-Smart-2K-33x33.png" },
                { id: 79, name: "Paul Millsap", team: "DEN", rating: 82, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Paul-Millsap-2K-33x33.png" },
                { id: 80, name: "Kevin Love", team: "CLE", rating: 82, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Kevin-Love-2K-33x33.png" },
                { id: 81, name: "Draymond Green", team: "GSW", rating: 82, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Draymond-Green-2K-33x33.png" },
                { id: 82, name: "DeAndre Jordan", team: "BKN", rating: 81, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/DeAndre-Jordan-2K-33x33.png" },
                { id: 83, name: "DeMarcus Cousins", team: "LAL", rating: 81, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/DeMarcus-Cousins-2K-33x33.png" },
                { id: 84, name: "Josh Richardson", team: "PHI", rating: 81, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Josh-Richardson-2K-33x33.png" },
                { id: 85, name: "Julius Randle", team: "NYK", rating: 81, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Julius-Randle-2K-33x33.png" },
                { id: 86, name: "Mike Conley", team: "UTA", rating: 81, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Mike-Conley-2K-33x33.png" },
                { id: 87, name: "Rudy Gay", team: "SAS", rating: 81, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Rudy-Gay-2K-33x33.png" },
                { id: 88, name: "Shai Gilgeous-Alexander", team: "OKC", rating: 81, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Shai-Gilgeous-Alexander-2K-33x33.png" },
                { id: 89, name: "Wendell Carter Jr.", team: "CHI", rating: 81, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Wendell-Carter-Jr.-2K-33x33.png" },
                { id: 90, name: "Zion Williamson", team: "NOP", rating: 81, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Zion-Williamson-2K-33x33.png" },
                { id: 91, name: "Tristan Thompson", team: "CLE", rating: 81, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Tristan-Thompson-2K-33x33.png" },
                { id: 92, name: "Brandon Clarke", team: "MEM", rating: 80, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Brandon-Clarke-2K-33x33.png" },
                { id: 93, name: "Cody Zeller", team: "CHA", rating: 80, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Cody-Zeller-2K-33x33.png" },
                { id: 94, name: "Dwight Howard", team: "LAL", rating: 80, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Dwight-Howard-2K-33x33.png" },
                { id: 95, name: "Enes Kanter", team: "BOS", rating: 80, position: "C", img_url: "https://www.2kratings.com//wp-content/uploads/Enes-Kanter-2K-33x33.png" },
                { id: 96, name: "Eric Paschall", team: "GSW", rating: 80, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Eric-Paschall-2K-33x33.png" },
                { id: 97, name: "Goran Dragic", team: "MIA", rating: 80, position: "PG", img_url: "https://www.2kratings.com//wp-content/uploads/Goran-Dragic-2K-33x33.png" },
                { id: 98, name: "Harrison Barnes", team: "SAC", rating: 80, position: "SF", img_url: "https://www.2kratings.com//wp-content/uploads/Harrison-Barnes-2K-33x33.png" },
                { id: 99, name: "Jabari Parker", team: "ATL", rating: 80, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Jabari-Parker-2K-33x33.png" },
                { id: 100, name: "Lauri Markkanen", team: "CHI", rating: 80, position: "PF", img_url: "https://www.2kratings.com//wp-content/uploads/Lauri-Markkanen-2K-33x33.png" }
            ],
            numberOfPicks: 10,
            lastFirstPick: 1,
            currentPicker: 1,
        };

    }


    removePick = (playerId, userId, player) => {
        const { users, players } = this.state
        const rightUserIndex = users.findIndex(user => user.id === userId)
        const playersWithoutRemovedPick = users[rightUserIndex].players.filter((item) => item !== player)
        users[rightUserIndex].players = playersWithoutRemovedPick
        this.setState({ users })

        let found = -1
        let nextIndex = playerId

        if (players.length + 1 === playerId) {
            players.splice(players.length, 0, player);
        } else {
            while (nextIndex !== players.length) {
                nextIndex++
                let nextPlayer = players.find(player => player.id === nextIndex)
                if (nextPlayer) {
                    found = players.findIndex(player => nextPlayer.id === player.id)
                    break
                }
            }
            players.splice(found, 0, player);
        }

        this.setState({ players })

    }

    addPlayerToUser = (player, userId, playersWithoutMovedPlayer) => {
        let { users } = this.state
        const rightUserIndex = users.findIndex(user => user.id === userId)
        users[rightUserIndex].players.push(player)

        this.setState({
            users,
            players: playersWithoutMovedPlayer
        })
        this.updateCurrentPicker(true)
    }

    updateCurrentPicker = (pickType: Boolean) => {
        /*
        ** if argument is true, player is added
        ** if argument is false, player gets removed
        */

        let { currentPicker, lastFirstPick } = this.state
        const { users } = this.state
        console.log(users.length)

        /*
        ** if true, teller verhogen zoals normaal
        ** als laatste speler heeft gekozen 
        */
       if(pickType === true){
        if ((currentPicker === users.length || currentPicker === 1) && currentPicker!== lastFirstPick) {
            if(currentPicker === users.length){
                currentPicker = users.length
            }
            if(currentPicker === 1){
                currentPicker = 1
            }
            lastFirstPick= currentPicker
        }
        else if(lastFirstPick === users.length && currentPicker !== 1){
            currentPicker = currentPicker - 1
        }
        else {
            currentPicker = currentPicker + 1
        }
       }
       //if picktype is false,
       else{

       }
        this.setState({ currentPicker, lastFirstPick })

    }

    public render() {
        const { users, numberOfPicks, players, currentPicker } = this.state
        return (
            <div
                className={css(
                    styles.App,
                )}
            >
                <UserTable
                    users={users}
                    numberOfPicks={numberOfPicks}
                    removePick={(playerId, userId, player) => this.removePick(playerId, userId, player)}
                />
                
                <PlayerList
                    addPlayerToUser={this.addPlayerToUser}
                    players={players}
                    currentPicker={currentPicker}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ home }: StoreState) => ({ home });
export default connect(mapStateToProps)(Draft);

const styles = StyleSheet.create({
    App: {
        alignItems: 'center',
        transition: '0.3s',
        backgroundColor: grey,
        height: "100vh",
        width: "100vw",
    },
});
