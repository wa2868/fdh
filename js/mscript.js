let allPosts = [
    { title: "1 Percent of Something (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9m0FgFk/1-Something-About.png" },
    { title: "A Business Proposal (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/DkzY6JR/Business-Proposal.png" },
    { title: "A Killer Paradox (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/x1dG6h3/A-Killer-Paradox.png" },
    { title: "A Man in a Veil (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/PZS413h/A-Man-in-a-Veil.png" },
    { title: "A Model Family (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/YRxx752/A-Model-Family.png" },
    { title: "A Piece of Your Mind (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/zby1FF5/A-Piece-of-Your-Mind.png" },
    { title: "A Robot In The Orange Orchard (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/LX3cny9b/A-Robot-In-The-Orange-Orchard.jpg" },
    { title: "A Time Called You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/pvQ4JYh/A-Time-Called-You.png" },
    { title: "Adamas (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mXpCXHr/Adamas-S01.jpg" },
    { title: "Alice in Borderland (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/rvhrWXj/Alice-in-Borderland-S01.jpg" },
    { title: "Alice in Borderland (Season 2)", tags: ["no tags"], img: "https://i.ibb.co/rHj1VL2/Alice-in-Borderland-S02.jpg" },
    { title: "All I Want for Love Is You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/LPBYThK/All-I-Want-for-Love-Is-You-S01.jpg" },
    { title: "All of Us Are Dead (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Wp4R8M5/All-of-Us-Are-Dead.png" },
    { title: "Almost Already Famous (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/myCxbxP/Almost-Already-Famous.png" },
    { title: "Amidst a Snowstorm of Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/CmpQNL4/Amidst-a-Snowstorm-of-Love.png" },
    { title: "And the Winner Is Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/gDLhddT/And-the-Winner-Is-Love.png" },
    { title: "Angel s Last Mission Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/19C5w5z/Angel-s-Last-Mission-Love.png" },
    { title: "Artificial City (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/MNMPynW/Artificial-City.png" },
    { title: "at Eighteen (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vLmWpCh/at-Eighteen.png" },
    { title: "Bad Prosecutor (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/3mWXdR8/Bad-Prosecutor.png" },
    { title: "Be Melodramatic (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/dWBRmLm/Be-Melodramatic.png" },
    { title: "Beautiful World (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/my9N9v3/Beautiful-World.png" },
    { title: "Beauty Inside (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/my2kbB8/Beauty-Inside-S01.png" },
    { title: "Behind Your Touch (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/BZzvyND/Behind-Your-Touch.png" },
    { title: "Best Lover (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Xxsrg6WN/Best-Lover.jpg" },
    { title: "Beyond Goodbye (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fN15Vzj/Beyond-Goodbye-S01.jpg" },
    { title: "Big Mouth (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/dQ7ZbH6/big-mouth.png" },
    { title: "Birth of a Beauty (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/q5Q0rQy/Birth-of-a-Beauty.png" },
    { title: "Black Knight (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/cNmsYWn/Black-Knight.png" },
    { title: "Blade Man (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/28Ld8gh/Blade-Man.png" },
    { title: "Bloodhounds (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/qRbFP2r/Bloodhounds.png" },
    { title: "Bloody Heart (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/4mN0PpR/Bloody-Heart.png" },
    { title: "Boys Over Flowers (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/smzJ3NR/Boys-Over-Flowers.png" },
    { title: "Bread Love and Dreams (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/G01n7hr/Bread-Love-and-Dreams.png" },
    { title: "Breaking Dawn (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/bNxB4W1/Breaking-Dawn.png" },
    { title: "Bride of the Century (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/VtT6r78/Bride-of-the-Century.png" },
    { title: "Brilliant Class 8 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/wh1PzDmr/Brilliant-Class-8.jpg" },
    { title: "Bring It On Ghost (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/3NwM2yL/Bring-It-On-Ghost.png" },
    { title: "Cafe Minamdang (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/QChbzB0/Cafe-Minamdang.png" },
    { title: "Castaway Diva (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/cDNWsb7/Castaway-Diva.png" },
    { title: "Catch the Ghost (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fD6zCMr/Catch-the-Ghost.png" },
    { title: "Celebrity (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/dJbbGnM/Celebrity.png" },
    { title: "Chasing the Ball (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vh68ytQ/Chasing-the-Ball.png" },
    { title: "Cheer Up (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0Y8z06D/Cheer-Up.png" },
    { title: "Cheer Up Sassy Go Go (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/x38zhKq/Cheer-Up-Sassy-Go-Go-Season-1.png" },
    { title: "Chicken Nugget (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mDhxKHC/chicken-nugget.png" },
    { title: "Children of a Lesser God (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/nQ8fV3q/Children-of-a-Lesser-God.png" },
    { title: "Clean with Passion for Now (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/hDgBptp/Clean-with-Passion-for-Now.png" },
    { title: "Come and Hug Me (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/BGDvkjt/Come-and-Hug-Me.png" },
    { title: "Crash Landing on You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/zmML8T4/Crash-Landing-on-You-S01.jpg" },
    { title: "Crazy Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/1G8JSPF/Crazy-Love.png" },
    { title: "Daily Dose of Sunshine (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/QbpYD27/Daily-Dose-of-Sunshine.png" },
    { title: "Dark Hole (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0981yD0/Dark-Hole.png" },
    { title: "Descendants of the Sun (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/SxqcCjZ/Descendants-of-the-Sun.png" },
    { title: "Destined with You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Czc4ygb/Destined-with-You.png" },
    { title: "Dine with love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/DRgS40X/Dine-with-Love.png" },
    { title: "Do You Like Brahms (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/JR9yRby/Do-You-Like-Brahms-S01.jpg" },
    { title: "Doctor Prisoner (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/pn5QY1Y/Doctor-Prisoner.png" },
    { title: "Don t Come Home (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/DD7KfvP/Dont-Come-Home-S01.png" },
    { title: "Don t Dare to Dream (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/6nKD0nQ/Don-t-Dare-to-Dream.png" },
    { title: "Doona (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mCZn2Wy/Doona.png" },
    { title: "Dr Romantic (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/JjgmM5c/Dr-Romantic-season-1.png" },
    { title: "Dr Romantic (Season 2)", tags: ["no tags"], img: "https://i.ibb.co/GMW0d7C/Dr-Romantic-Season-2.png" },
    { title: "Dream Garden (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/NgqYSV6X/dream-garden.jpg" },
    { title: "Emergency Couple (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2v1zhtS/Emergency-Couple-S01.jpg" },
    { title: "Encounter (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/4WqXhhm/Encounter.png" },
    { title: "Extraordinary Attorney Woo (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/hZPV0qr/Extraordinary-Attorney-Woo.png" },
    { title: "Extraordinary You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vZt0S8r/Extraordinary-You.png" },
    { title: "Fall in Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/sCv3t63/Fall-in-Love.png" },
    { title: "Familiar Wife (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/jJLTRBm/Familiar-Wife.png" },
    { title: "Fantastic (2016) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/S5FYY9q/Fantastic.png" },
    { title: "Farming Academy (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0fKH5jX/Farming-Academy.png" },
    { title: "Fight for My Way (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/TPby8BN/Fight-for-My-Way.png" },
    { title: "Find Me in Your Memory (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/NSDtVpz/Find-Me-in-Your-Memory.png" },
    { title: "First Love (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fNGhqwP/First-Love.png" },
    { title: "Flight to You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/rHMX9G6/Flight-to-You.png" },
    { title: "Flower Crew Joseon Marriage Agency (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fG1BTcjf/Flower-Crew-Joseon-Marriage-Agency.jpg" },
    { title: "Flower of Evil (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/P5Lqqfr/Flower-of-Evil.png" },
    { title: "Forget You Remember Love (2020) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vCwCYZfY/Forget-You-Remember-Love.jpg" },
    { title: "Game of Witches (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/FLvtZCPg/Game-Of-Witches-Season-1.jpg" },
    { title: "Gaus Electronics (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/nrnG3q4/Gaus-Electronics-S01.jpg" },
    { title: "Gen Z (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/BGzZTTL/Gen-Z.png" },
    { title: "Girlfriend (2020) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/djJysd0/Girlfriend.png" },
    { title: "Good Bye My Princess (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/D5ZtBkH/Good-Bye-My-Princess.png" },
    { title: "Goodbye to Goodbye (2018) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/CzFLhBV/Goodbye-to-Goodbye.png" },
    { title: "Got A Crush on You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/yss0KNr/Got-A-Crush-on-You.png" },
    { title: "Gyeongseong Creature (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/sWyw2yM/Gyeongseong-Creature.png" },
    { title: "Gyeongseong Creature (Season 2)", tags: ["no tags"], img: "https://i.ibb.co/FwqgkvK/Gyeongseong-Creature-S02.png" },
    { title: "Healer (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/zrFpMvh/Healer-S01-E01.jpg" },
    { title: "Healing Food Healing Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/rb1wvw6/Healing-Food-Healing-Love.png" },
    { title: "Hear Me (Season 2)", tags: ["no tags"], img: "https://i.ibb.co/xKttpGhL/Hear-Me.jpg" },
    { title: "Heart Surgeons (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/RHNn9zH/Heart-Surgeons.png" },
    { title: "Heirs (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mzWVMcM/Heirs.png" },
    { title: "Hellbound (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2yXPf7t/Hellbound.png" },
    { title: "Hellbound (Season 2)", tags: ["no tags"], img: "https://i.ibb.co/Sd5h8HQ/Hellbound-Season-02.png" },
    { title: "Hello Mr Gu (2021) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/cJ1Dnhg/Hello-Mr-Gu.png" },
    { title: "Hello My Girl (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/SwQKPnmD/Hello-My-Girl.jpg" },
    { title: "Hello My Twenties (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/cXL3Y5vv/Hello-My-Twenties.jpg" },
    { title: "Here to Heart (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/DK67GTv/Here-to-Heart-S01.jpg" },
    { title: "Hi Venus (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/bmP5gV9/Hi-Venus.png" },
    { title: "Hidden Marriage Love (2021) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/HTK5wCsc/Hidden-Marriage-Love.jpg" },
    { title: "Hierarchy (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/1dYs2Vk/Hierarchy.png" },
    { title: "Hospital Ship (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fxw0vbp/Hospital-Ship-S01.jpg" },
    { title: "Hot Stove League (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/CPH6rPJ/Hot-Stove-League.png" },
    { title: "House of Ninjas (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/k9rCtZJ/House-of-Ninjas.png" },
    { title: "Hwarang (2016) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/KDhfYPV/Hwarang.png" },
    { title: "I Am Not a Robot (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/ngchr6M/I-Am-Not-a-Robot.png" },
    { title: "I Belonged to Your World (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vhm9mVk/I-Belonged-to-Your-World.png" },
    { title: "I Know I Love You (2023) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/v42Zvf2c/I-Know-I-Love-You.jpg" },
    { title: "I May Love You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/rRBwyvYQ/I-May-Love-You.jpg" },
    { title: "I Wanna Hear Your Song (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/8738Rdg/I-Wanna-Hear-Your-Song.png" },
    { title: "Innocent Defendant (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fCY3T8Z/Innocent-Defendant-S01.png" },
    { title: "Intense Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/QNQRhZL/Intense-Love.png" },
    { title: "Into the Ring (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/HC5xY5D/Into-the-Ring.png" },
    { title: "It s Okay to Not Be Okay (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/zbh8cmY/It-s-Okay-to-Not-Be-Okay.png" },
    { title: "Itaewon Class (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/WxjGCDn/Itaewon-Class-S01.jpg" },
    { title: "Jang Geum Oh My Grandma S01(2018) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/8bLLVw3/Jang-Geum-Oh-My-Grandma-S01-2018.png" },
    { title: "Joseon Attorney (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Hqtjsnj/Joseon-Attorney-S01.png" },
    { title: "Jumping Girl (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/W6XxPbF/Jumping-Girl-S01.jpg" },
    { title: "Juvenile Justice (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/cc2Hvw9/Juvenile-Justice.png" },
    { title: "Kairos (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2Yhd6KY/Kairos.png" },
    { title: "Karma (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/MDc23CTQ/karma.jpg" },
    { title: "Kill It (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/yykWCh2/Kill-It.png" },
    { title: "Kill Me Heal Me (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/q0Wx8PF/Kill-Me-Heal-Me-S01.jpg" },
    { title: "King the Land (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/qrVGwWQ/King-the-Land.png" },
    { title: "Kkondae Intern (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/z5khD21/Kkondae-Intern.png" },
    { title: "Last One Standing (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/CMTgzb8/Last-One-Standing.png" },
    { title: "Lawless Lawyer (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/GkgxZ8M/Lawless-Lawyer.png" },
    { title: "Leap Day S01 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/s92Y2h6/Leap-Day-S01.png" },
    { title: "Legal High (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9WmdDb7/Legal-Hig.png" },
    { title: "Less Than Evil (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/rZZwbsk/Less-Than-Evi.png" },
    { title: "Lie to Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/F8bKR4L/Lie-to-Lov.png" },
    { title: "Light on Me (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0DkR9kx/Light-on-M.png" },
    { title: "Listen To Love (2016) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Cz6sSFg/Listen-To-Lov.png" },
    { title: "Live On (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/bgSyTBv1/Live-On.jpg" },
    { title: "Live Your Life (2021) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/HXd08N4/Live-Your-Life.png" },
    { title: "Lonely Enough to Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/55tQ4gv/Lonely-Enough-to-Love-S01.png" },
    { title: "Love at First Bite (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/rysfTVX/Love-at-First-Bite-S01.png" },
    { title: "Love Endures (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/LJbT753/Love-Endures.png" },
    { title: "Love is Sweet (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Y77tyzV/Love-Is-Sweet-S01.jpg" },
    { title: "Love Me Like I Do (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/KrVnvZ5/Love-Me-Like-I-Do.png" },
    { title: "Love Script (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/NZgcNX4/Love-Script.png" },
    { title: "Love Story of Court Enemies (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/TPVkjFQ/Love-Story-of-Court-Enemies.png" },
    { title: "Love to Hate You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2KsYcG2/Love-to-Hate-You-S01.jpg" },
    { title: "Love Unexpected (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/pbLCh0j/Love-Unexpected.png" },
    { title: "Love with Flaws (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9cPPXZD/Love-With-Flaws-S01.jpg" },
    { title: "Lover or Stranger (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/DM7Mz9c/Lover-Stranger-S01.jpg" },
    { title: "LUCA The Beginning (2021) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/FxMFWyc/L-U-C-A-The-Beginning.png" },
    { title: "Madame Antoine (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/k6Hp0Dc1/Madame-Antoine.jpg" },
    { title: "Marriage Before Love 2021 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/HfV0gfrw/Marriage-Before-Love.jpg" },
    { title: "Marriage Contract (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/n19qD37/Marriage-Contract.png" },
    { title: "Mask Girl (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/br3MLZY/Mask-Girl.png" },
    { title: "Meet You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/FLwXcSsS/meet-you-drama.jpg" },
    { title: "Meeting You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/g9BF7nw/Meeting-You.png" },
    { title: "Melo Movie (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Rt7JFkd/Melo-Movie.jpg" },
    { title: "Melting Heart Cake (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/GQg0fC4/Melting-Heart.png" },
    { title: "Meow the Secret Boy (2020) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/DkJ0jtt/Meow-the-Secret-Boy.png" },
    { title: "Mirror A Tale of Twin Cities (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Y3yTMXc/Mirror-A-Tale-of-Twin-Cities-S01.jpg" },
    { title: "Miss Hammurabi (2018) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/xhPhZ7y/Miss-Hammurabi.png" },
    { title: "Miss Lucky Go (2023) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/gvmxXSp/Miss-Lucky-Go.png" },
    { title: "Missing 9 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/qRGh60Y/Missing-9-S01.jpg" },
    { title: "Mister flower (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/n8zc2Vy/Mister-Flower-S01.png" },
    { title: "Mistress (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/kGLpXB2/Mistress.png" },
    { title: "Misty (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/18WHGFb/Misty.png" },
    { title: "Money Flower (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/ySKvLWV/Money-Flower.png" },
    { title: "Money Heist Korea  Joint Economic Area  Part 1 (2022)", tags: ["no tags"], img: "https://i.ibb.co/Vwj5T9p/Money-Heist-Korea-Joint-Economic-Area-Part-1.png" },
    { title: "Monstrous (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/tK9W1vx/Monstrous.png" },
    { title: "Moonlight Romance (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/tDzQjr4/Moonlight-Romance.png" },
    { title: "Moonshine (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/X8mp1XF/Moonshine-S01.png" },
    { title: "More Than Friends (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/nn03QSS/More-Than-Friends.png" },
    { title: "Move to Heaven (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/QcH8bXF/Move-to-Heaven-S01.jpg" },
    { title: "Mr Plankton (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/3MX6cLC/Mr-Plankton-S01.jpg" },
    { title: "Mr Queen (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/7pH2Fcf/Mr-Queen.png" },
    { title: "My Dear Brother (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/qCP3RZN/My-Dear-Brothers-S01.jpg" },
    { title: "My Dearest (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/W5WR9nR/My-Dearest.png" },
    { title: "My Deskmate (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fXdLXfR/My-Deskmate.png" },
    { title: "My Family (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0n9BNNJ/My-Family-S01.jpg" },
    { title: "My Girlfriend Is a Gumiho (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/sWb1dDg/My-Girlfriend-Is-A-Gumiho-S01-E01-Hindi-720p-WEB-DL-ESub-Fast-Drama-s1.png" },
    { title: "My Girlfriend is an Alien (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/qCrKGtp/My-Girlfriend-is-an-Alien-S01.jpg" },
    { title: "My Golden Life (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/m06zHG5/My-Golden-Life-season-1.png" },
    { title: "My Horrible Boss S01 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/TcqCPMZ/My-Horrible-Boss-S01.jpg" },
    { title: "My ID Is Gangnam Beauty (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/n1rTWV6/My-ID-Is-Gangnam-Beauty.png" },
    { title: "My Lethal Man (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/1ZF0XmY/My-Lethal-Man.png" },
    { title: "My Little Baby (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/z5JJpSf/My-Little-Baby.png" },
    { title: "My Little Happiness (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/gj4StpW/My-Little-Happiness-S01.jpg" },
    { title: "My Love from the Star (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/727XT68/My-Love-from-the-Star-S01.jpg" },
    { title: "My Lovely Girl (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/6YN47nQ/My-Lovely-Girl.png" },
    { title: "My Name (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/sP03ZwR/My-Name-S01.jpg" },
    { title: "My Sassy Girl (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/8dqwTHT/My-Sassy-Girl-S01.png" },
    { title: "My Secret Terrius (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/LQdLw5p/My-Secret-Terrius.png" },
    { title: "My Star Bride (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fpTN7xw/My-Star-Bride-S01.jpg" },
    { title: "My Strange Hero (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/KGj24BP/My-Strange-Hero.png" },
    { title: "My Unfortunate Boyfriend (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/GHQ832H/My-Unfortunate-Boyfriend.png" },
    { title: "Mysterious Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/bRBVVxWq/Mysterious-Love.jpg" },
    { title: "Mysterious Nurse (2018) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2dNfpdL/Mysterious-Nurse.png" },
    { title: "Nakee 2 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vPMXxrx/Nakee.png" },
    { title: "Narco Saints (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/jzhwgFD/Narco-Saints.png" },
    { title: "Numbers (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/yNgFySd/Numbers.png" },
    { title: "Oh My Venus (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/8mYJCx5/Oh-My-Venus.png" },
    { title: "Once and Again (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9Tj3fp7/Once-and-Again.png" },
    { title: "Once We Get Married (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/NSWMz4f/Once-We-Get-Married.png" },
    { title: "One Dollar Lawyer (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2gDst8Y/One-Dollar-Lawyer.png" },
    { title: "One More Happy Ending (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/pzhBb49/One-More-Happy-Ending.png" },
    { title: "One the Woman (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/XVtzb5V/One-the-Woman.png" },
    { title: "Oppa saranghae (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9g6JJ3y/Oppa-Saranghaei-S01.jpg" },
    { title: "Parasyte The Grey (2024) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/N6zqYDJ/Parasyte-The-Grey.png" },
    { title: "Partners for Justice (2018) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/YhBM1RZ/Partners-for-Justice.png" },
    { title: "Penthouse War in Life (2020)  (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/YyG2D4t/The-Penthouse-War-in-Life.png" },
    { title: "Penthouse War in Life (2021)  (Season 2)", tags: ["no tags"], img: "https://i.ibb.co/BySmqRT/The-Penthouse-Season-2-War-in-Life.png" },
    { title: "Perfume (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/JpSHLK5/Perfume.png" },
    { title: "Physical 100 (2023) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/rwRw3Cw/Physical-100-season-1.png" },
    { title: "Playful Kiss (2010) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Z1wt3gh/Playful-Kiss.png" },
    { title: "Please Be Married (2021) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/XkCgPdS/Please-Be-Married.png" },
    { title: "Please Don t Date Him (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/f4SjX0b/Please-Don-t-Date-Him.png" },
    { title: "Pretty Ugly (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mTqrRnn/Pretty-Ugly-S01.png" },
    { title: "Queen I (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/yFTVYJz/Queen-and-I-S01.jpg" },
    { title: "Queen of the Ring (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/yX9L4ML/Queen-of-the-Ring.png" },
    { title: "Radiant Office (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/F5bCV77/Radiant-Office-S01.jpg" },
    { title: "Rain or Shine (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/sFvRNZy/Rain-or-Shine.png" },
    { title: "Remarriage Desires (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/LtMLpCz/Remarriage-and-Desires.png" },
    { title: "Remember My Boy (2021) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/4WCrkGD/Remember-My-Boy-S01.png" },
    { title: "Reunited Worlds (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/CBgt9vp/Reunited-Worlds-S01.png" },
    { title: "Rich Man (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/nbngBQM/Rich-Man.png" },
    { title: "Room No 9 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Z1m0hfP/Room-No-9.png" },
    { title: "Rope a Dope (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fCtBfFC/Rope-A-Dope-S01.jpg" },
    { title: "Save Me (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/XJYRyCc/Save-Me.png" },
    { title: "School 2017 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/S6RTFhm/School-2017-S01.jpg" },
    { title: "Scripting Your Destiny (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/CWKwvFB/Scripting-Your-Destiny.png" },
    { title: "SF8 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/zQ68d6G/SF8.png" },
    { title: "She and Her Perfect Husband (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Fgfc7HH/She-and-Her-Perfect-Husband-S01.jpg" },
    { title: "She Was Pretty (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Nm8Cr8F/She-Was-Pretty.png" },
    { title: "Shopping King Louie (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/7NXDCLp/Shopping-King-Louie.png" },
    { title: "Signs (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9cgfNYg/Signs.png" },
    { title: "Simmer Down (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/FxPwS2b/Simmer-Down.png" },
    { title: "Single’s Inferno (Season 1) (2021)", tags: ["no tags"], img: "https://i.ibb.co/VjgXcwm/Single-s-Inferno-Season-1.png" },
    { title: "Single’s Inferno (Season 2) (2022)", tags: ["no tags"], img: "https://i.ibb.co/XynZJg5/Single-s-Inferno-Season-2.png" },
    { title: "Single’s Inferno (Season 3) (2023)", tags: ["no tags"], img: "https://i.ibb.co/Xsx3MVt/Single-s-Inferno-Season-3.png" },
    { title: "Sketch (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/TBD1VKj/Sketch.png" },
    { title: "Skip a Beat (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/xtT1gTzJ/Skip-a-Beat.jpg" },
    { title: "SKY Castle (2018) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/3MT7wd0/SKY-Castle.png" },
    { title: "Smile To Life (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/YBbzjGfX/Smile-To-Life.jpg" },
    { title: "Snowdrop (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/dKL27Zk/Snowdrop.png" },
    { title: "Solomon s Perjury (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/qnQMf5r/Solomon-s-Perjury.png" },
    { title: "Somebody (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0ZRtmhJ/Somebody.png" },
    { title: "Something in the Rain (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/p8kQWp1/Something-in-the-Rain.jpg" },
    { title: "Song of the Bandits (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/S6MpXMq/Song-of-the-Bandits.png" },
    { title: "Soundtrack #1 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/GkRYpNn/Soundtrack.png" },
    { title: "Spring Turns to Spring (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/H2pXrhR/Spring-Turns-to-Spring.png" },
    { title: "Squid Game (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/S6Y9kF2/Squid-Game-S01-E01.png" },
    { title: "Squid Game The Challenge (2023) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2q6tpFg/Squid-Game-The-Challenge.png" },
    { title: "Start Up (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/BPtbbQV/Start-Up-S01.jpg" },
    { title: "Still 17 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/dfNbN4r/Still-17.png" },
    { title: "Strange School Tales (Season 01)", tags: ["no tags"], img: "https://i.ibb.co/55y3QQK/Strange-School-Tales-S01.jpg" },
    { title: "Strange School Tales (Season 02)", tags: ["no tags"], img: "https://i.ibb.co/Gt9SxsJ/Strange-School-Tales-S02.jpg" },
    { title: "Strange School Tales  (Season 03)", tags: ["no tags"], img: "https://i.ibb.co/x76RPfK/Strange-School-Tales-S03.jpg" },
    { title: "Stranger (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/p3Y08cY/stranger.png" },
    { title: "Strong Girl Nam soon (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/KG9cQY4/Strong-Girl-Nam-soon.png" },
    { title: "Summer Strike (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/39QX93qQ/Summer-Strike-S01-E12-720p-WEB-DL-HIN-KOR-x264-Eub-Fast-Drama-screenshot-1.jpg" },
    { title: "Suspicious Partner (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/BjRsgtw/Suspicious-Partner.png" },
    { title: "Sweet and Salty Office (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/pyNY7Xt/Sweet-Salty-Office-S01.png" },
    { title: "Sweet First Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/10b7QHH/Sweet-First-Love.png" },
    { title: "Sweet Home (2020) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/5YxLHVp/Sweet-Home-1.png" },
    { title: "Sweet Home (2023) Season2 ", tags: ["no tags"], img: "https://i.ibb.co/Bn8HHGF/Sweet-Home-2.png" },
    { title: "Sweet Home (2024) (Season 3)", tags: ["no tags"], img: "https://i.ibb.co/vLHw8w8/Sweet-Home-3.png" },
    { title: "Sweet Munchies (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Kp7Z3CqS/Sweet-Munchies.jpg" },
    { title: "Sweet Sweet (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/ChccqXj/Sweet-Sweet-S01.jpg" },
    { title: "Switch (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/sVxD7Xn/Switch.png" },
    { title: "Switch On (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/R4pwNKx/Switch-On.png" },
    { title: "Tale of the Nine Tailed (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/FYsyNb2/Tale-of-the-Nine-Tailed.png" },
    { title: "Teenage Textbook (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/LgyBMMb/Teenage-Textbook-S01.png" },
    { title: "Tempted (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/TcgLzQY/Tempted.png" },
    { title: "That Man Oh Soo (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/qxp8fJm/That-Man-Oh-Soo.png" },
    { title: "The 8 Show (2024) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/5hR5Mj4/The-8-Show.png" },
    { title: "The Bequeathed (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/LDyvWfx/The-Bequeathed.png" },
    { title: "The Crack of Dawn (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vdmBXjD/The-Crack-of-Dawn-2022.png" },
    { title: "The Cyborg Mom (2017) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/WzSsWWB/The-Cyborg-Mom-2017.png" },
    { title: "The Devil s Plan (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/7QtZjP0/The-Devil-s-Plan.png" },
    { title: "The Fabulous (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/xs3f2D1/The-Fabulous.png" },
    { title: "The Fiery Priest (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/nzNsZVQ/The-Fiery-Priest.png" },
    { title: "The Frogs (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/gyxn9hJ/The-Frog-S01.png" },
    { title: "The Game Towards Zero (2020) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/C6760ht/The-Game-Towards-Zero.png" },
    { title: "The Glory (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/6YXG6zP/The-Glory.png" },
    { title: "The Golden Spoon (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/MM5D3y6/The-Golden-Spoon-S01.jpg" },
    { title: "The Guardians (2017) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/q9vxn25/The-Guardians.png" },
    { title: "The K2 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/brVcDbt/The-K2.png" },
    { title: "The King Eternal Monarch (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/dtbkz8w/The-King-Eternal-Monarch-S01.jpg" },
    { title: "The King in Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/DfsfGqT6/The-King-in-Love.jpg" },
    { title: "The King of Pigs (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/NmFMwLZ/The-King-of-Pigs.png" },
    { title: "The King s Woman (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/svcBV7Gb/The-King-s-Woman.jpg" },
    { title: "The Lady in Dignity (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/zQjYQFT/The-Lady-in-Dignity-S01.jpg" },
    { title: "The Last Empress (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/ckWMDZQ/The-Last-Empress-S01.jpg" },
    { title: "The Law Cafe (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0BQfsvM/The-Law-Cafe.png" },
    { title: "The Legend of the Blue Sea (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/1zwgMD4/The-Legend-of-the-Blue-Sea-S01.jpg" },
    { title: "The Legends of Monkey King (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/x3B7ydJ/The-Legends-of-Changing-Destiny.png" },
    { title: "The Light in Your Eyes (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/B28nbDL/The-Light-in-Your-Eyes.png" },
    { title: "The Love You Give Me (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/jLZRd8X/The-Love-You-Give-Me.png" },
    { title: "The Master s Sun (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/BsmrMQB/The-Master-s-Sun.png" },
    { title: "The Most Beautiful Boy in the World (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mDW9z4j/The-Most-Beautiful-You-In-The-World-S01.png" },
    { title: "The One and Only Ivan (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/QM7QrD2/The-One-and-Only.png" },
    { title: "The Package (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/kQ49DXx/The-Package.png" },
    { title: "The Return (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/1GBRCqn/The-Return.png" },
    { title: "The Romance of Tiger and Rose (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/HVFZmW1/The-Romance-of-Tiger-and-Rose.png" },
    { title: "The Scholar Who Walks the Night (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/fQsSh9T/The-Scholar-Who-Walks-the-Night.png" },
    { title: "The Second Husband (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/55ygLRQ/The-Second-Husband.png" },
    { title: "The Secret Life of My Secretary (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/YBGCTyJ/The-Secret-Life-of-My-Secretary.png" },
    { title: "The Secret of Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/tqZYfmz/The-Secret-of-Love-S01.jpg" },
    { title: "The Silent Sea (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/JQfdcGn/The-Silent-Sea.png" },
    { title: "The Sleepless Princess (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/p4hpqy2/The-Sleepless-Princess.png" },
    { title: "The Sound of Magic (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/VB61Vww/The-Sound-of-Magic.png" },
    { title: "The Starry Night the Starry Sea (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Byg9YG9/The-Starry-Night-The-Starry-Sea-S01.png" },
    { title: "The Tale of Nokdu (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/wrWsxBY/The-Tale-of-Nokdu.png" },
    { title: "The Time We Were Not in Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/z8wDYJZ/The-Time-We-Were-Not-In-Love-S01.png" },
    { title: "The Trauma Code Heroes on Call (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/N2234BTp/The-Trauma-Code-Heroes-on-Call.jpg" },
    { title: "The Trunk (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/cQHWXb9/The-Trunk-S01.jpg" },
    { title: "The Village Achiara s Secret (2015) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/dLJzCbZ/The-Village-Achiara-s-Secret.png" },
    { title: "The Wind Blows (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/z6dnjvc/The-Wind-Blows.png" },
    { title: "The Witch Store (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/vkNLMKN/The-Witch-Store.png" },
    { title: "The Wolf (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/x5HpjvY/The-Wolf-S01.jpg" },
    { title: "The Wolf Princess (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/bQwXq0r/The-Wolf-Princess-S01.jpg" },
    { title: "This is My Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mCv2mP2y/This-is-My-Love.jpg" },
    { title: "Tientsin Mystic (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/jT3SCgZ/Tientsin-Mystic.png" },
    { title: "Time to Fall in Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/tstG8z2/Time-to-Fall-in-Love.png" },
    { title: "To All the Guys Who Loved Me (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/4N2WXH2/To-All-the-Guys-Who-Loved-Me.png" },
    { title: "Tokyo Swindlers (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Qdzvhdh/Tokyo-Swindlers.png" },
    { title: "Tomorrow with You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/YchKcpZ/Tomorrow-with-You.png" },
    { title: "Touch Your Heart (2019) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/TkSrkTR/Touch-Your-Heart.png" },
    { title: "Uncontrollably Fond (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/C950gq8/Uncontrollably-Fond.png" },
    { title: "Undercover (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9gNBX8m/Undercover.png" },
    { title: "Untouchable (2017) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/nntccD9/Untouchable.png" },
    { title: "Vagabond (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Hr2LHHr/Vagabond.png" },
    { title: "Vincenzo (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0JFNGHP/Vincenzo.png" },
    { title: "W Two Worlds Apart (2016) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/StLcxkB/W-Two-Worlds-Apart.png" },
    { title: "Waiting for You in the Future (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/XDJnJz7/Waiting-for-You-in-the-Future.png" },
    { title: "Warm Meet You (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/7S6mfz7/Warm-Meet-You.png" },
    { title: "We Got Game (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/SJMCbjK/We-Got-Game-S01.png" },
    { title: "Weak Hero Class 1 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/s93Gbk7M/Weak-Hero-Class-1.jpg" },
    { title: "Weightlifting Fairy Kim Bok Joo (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Nx6HJrv/Weightlifting-Fairy-Kim-Bok-Joo.png" },
    { title: "Welcome 2 Life (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/thjJJFn/Welcome-2-Life.png" },
    { title: "What s Wrong with Secretary Kim (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/2d67jH5/What-s-Wrong-with-Secretary-Kim.png" },
    { title: "When I Was the Most Beautiful (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/N9vyWnq/When-I-Was-the-Most-Beautiful.png" },
    { title: "When Life Gives You Tangerines (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/JFcnQT5G/When-Life-Gives-You-Tangerines.jpg" },
    { title: "When the Phone Rings (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/G3s5hj3K/When-the-Phone-Rings.jpg" },
    { title: "When the Weather is Fine (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/mJk0VM0/When-the-Weather-is-Fine.png" },
    { title: "When We Meet (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/y6zrLrq/When-We-Meet.png" },
    { title: "Where Stars Land (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/QKd35dM/Where-Stars-Land-S01.jpg" },
    { title: "Who Are You School 2015 (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/McBd1Hw/Who-Are-You-School-2015-S01.jpg" },
    { title: "Witch s Court (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/9hT6sY0/Witch-s-Court.png" },
    { title: "Wok of Love (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/yBy1ZVx/Wok-Of-Love-S01.png" },
    { title: "Work Later Drink Now (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/cw0qvqM/Work-Later-Drink-Now.png" },
    { title: "XO Kitty (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/6PzXtGp/XO-Kitty.png" },
    { title: "Yong Pal (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/nf6YqJP/Yong-Pal.png" },
    { title: "You Are My Destiny (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/q7MK3MT/You-Are-My-Destiny.png" },
    { title: "You are My Glory (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/8xJXscq/You-are-My-Glory.png" },
    { title: "You Are My Spring (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/Jj24rSH/You-Are-My-Spring.png" },
    { title: "Youth (2022) (Season 1)", tags: ["no tags"], img: "https://i.ibb.co/0vPZgr7/youth.jpg" },
];
            let postsPerPage = 12; // Adjust as needed
            let currentPage = 1;
            let currentTag = "";
            let filteredPosts = [...allPosts];
            let downloadEnabled = false; // Initially, download button is disabled
    
            // Populate Tags
            function populateTags() {
                let tagSet = new Set();
                allPosts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
                let tagFilter = document.getElementById("tag-filter");
                tagFilter.innerHTML = '<option value="">All Tags</option>';
                tagSet.forEach(tag => {
                    let option = document.createElement("option");
                    option.value = tag;
                    option.textContent = tag;
                    tagFilter.appendChild(option);
                });
            }
    
            // Display Posts
            function displayPosts() {
                let container = document.getElementById("post-container");
                container.innerHTML = "";
                let start = (currentPage - 1) * postsPerPage;
                let end = start + postsPerPage;
                let postsToShow = filteredPosts.slice(start, end);
    
                postsToShow.forEach(post => {
                    let postDiv = document.createElement("div");
                    postDiv.className = "col";
                    postDiv.innerHTML = `
                        <div class="post">
                            <img src="${post.img}" alt="${post.title}" onclick="openPostInNewTab('${post.title}')">
                            <h2 onclick="openPostInNewTab('${post.title}')">${post.title}</h2>
                            <button class="btn btn-primary" onclick="openPostInNewTab('${post.title}')">Watch Now</button>
                            ${downloadEnabled ? `<button class="btn btn-success download-btn" onclick="downloadPost('${post.title}')">Download</button>` : ''}
                            <p class="tags">Tags: ${post.tags.map(tag => `<span onclick="filterByTag('${tag}')">${tag}</span>`).join(", ")}</p>
                        </div>
                    `;
                    container.appendChild(postDiv);
                });
                displayPagination();
                updateURL();
            }
    
            // Filter by Tag
            function filterByTag(tag) {
                currentTag = tag || document.getElementById("tag-filter").value;
                filteredPosts = currentTag ? allPosts.filter(post => post.tags.includes(currentTag)) : [...allPosts];
                currentPage = 1;
                displayPosts();
            }
    
            // Search Posts
            function searchPosts() {
                let searchTerm = document.getElementById("search").value.toLowerCase();
                filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(searchTerm));
                currentPage = 1;
                displayPosts();
            }
    
            // Open Post in New Tab
            function openPostInNewTab(title) {
                let formattedTitle = title.replace(/\s+/g, '-');
                window.open(`/p/${formattedTitle}.html`, '_blank');
            }
    
            // Download Post
            function downloadPost(title) {
                let formattedTitle = title.replace(/\s+/g, '-');
                window.open(`/d/${formattedTitle}`, '_blank');
            }
    
            // Toggle Download Button
            function toggleDownloadButton() {
                downloadEnabled = !downloadEnabled;
                document.getElementById("toggle-download-btn").textContent = downloadEnabled ? "Disable Download" : "Enable Download";
                displayPosts(); // Refresh posts to show/hide download buttons
            }
    
            // Display Pagination
            function displayPagination() {
                let pagination = document.getElementById("pagination");
                pagination.innerHTML = "";
                let totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
                // Previous Button
                if (currentPage > 1) {
                    let prevButton = document.createElement("button");
                    prevButton.className = "btn btn-primary mx-1";
                    prevButton.textContent = "Previous";
                    prevButton.onclick = () => goToPage(currentPage - 1);
                    pagination.appendChild(prevButton);
                }
    
                // Page Numbers
                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, currentPage + 1);
    
                for (let i = startPage; i <= endPage; i++) {
                    let button = document.createElement("button");
                    button.className = currentPage === i ? "btn btn-primary mx-1 active" : "btn btn-primary mx-1";
                    button.textContent = i;
                    button.onclick = () => goToPage(i);
                    pagination.appendChild(button);
                }
    
                // Next Button
                if (currentPage < totalPages) {
                    let nextButton = document.createElement("button");
                    nextButton.className = "btn btn-primary mx-1";
                    nextButton.textContent = "Next";
                    nextButton.onclick = () => goToPage(currentPage + 1);
                    pagination.appendChild(nextButton);
                }
    
                // Last Button
                if (currentPage < totalPages) {
                    let lastButton = document.createElement("button");
                    lastButton.className = "btn btn-primary mx-1";
                    lastButton.textContent = "Last";
                    lastButton.onclick = () => goToPage(totalPages);
                    pagination.appendChild(lastButton);
                }
            }
    
            // Go to Page
            function goToPage(page) {
                currentPage = page;
                displayPosts();
            }
    
            // Update URL
            function updateURL() {
                let params = new URLSearchParams();
                if (currentTag) params.set("tag", currentTag);
                if (currentPage > 1) params.set("page", currentPage); // Only add page if it's not the first page
                let newURL = `${window.location.pathname}?${params.toString()}`;
                window.history.replaceState(null, "", newURL);
            }
    
            // Get Parameters from URL
            function getParamsFromURL() {
                let params = new URLSearchParams(window.location.search);
                currentTag = params.get("tag") || "";
                currentPage = params.get("page") ? parseInt(params.get("page")) : 1;
            }
    
            // Initialize
            document.addEventListener("DOMContentLoaded", () => {
                getParamsFromURL();
                populateTags();
                filterByTag(currentTag);
                displayPosts();
    
                // Add event listener for toggle download button
                document.getElementById("toggle-download-btn").addEventListener("click", toggleDownloadButton);
            });
