/**
 * Created by DrTone on 28/01/2016.
 */

//Hex Vector performance

$(document).ready(function() {
    var player;
    MIDI.loadPlugin({
        soundfontUrl: "./soundfont/",

        onsuccess: function() {
            /// this is the language we are running in

            /// this sets up the MIDI.Player and gets things going...
            player = MIDI.Player;
            player.timeWarp = 1; // speed the song is played back
            player.loadFile("audio/MIDIMaster.mid", function() {
                player.start();
            });

            player.addListener(function(data) {
                //console.log("Channel = ", data.channel);
                //console.log("Now = ", data.now);
                //MIDI.Player.trackMuteStates[data.track] = false;
            });

            ///
        }
    });

    sessionStorage.removeItem("mute");

    var channelsMuted = [false, false, false, false, false, false];
    $('[id^=muteButton]').on("click", function() {
        sessionStorage.setItem("mute", true);
    });
});

