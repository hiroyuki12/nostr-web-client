
export const makeStatusString = (note) => {


    let status = "";


    if(note.kind === 30315) {  // kind:30315:User Statuses
        status = "[30315 status]"
        //if(note.tags[0][1] != undefined && note.tags[0][1].includes("music")) {
            //status = "[30315 status music]"
            //todo://content = '<a href="' + "https://open.spotify.com/search/" + content + '" target="_blank">' + content + '</a>'
        //}
    }




    else if(note.kind === 0) {  // kind:0:Metadata
        status = "[0 Metadata]_"
    }
    else if(note.kind === 3) {  // kind:3:Contacts
        let followCount = 0
        for(let x=0; x<note.tags.length; x++) {
            followCount++
        }
        //status = "[3 Contacts / follow, save relay (snort/damus/coracle/NostrFlu " + followCount + "]_"
        status = "[3 Contacts " + followCount + "]_"
        if(content != "") {
            //todo://content = 'relay list...'
        }
        else {
            //todo://content = '[empty]'
        }
    }
    else if(note.kind === 4) {  // kind:4:Encrypted Direct Message
        status = "[4 DM]_"
        ontent = ' Direct Message. This message is not for you.'
    }
    else if(note.kind === 5) {  // kind:5:Event Deletion
        status = "[5 Delete]"
    }
    else if(note.kind === 8) {  // kind:8:Badge Award
        status = "[8 Badge Award]"
        //todo://content = note.tags[0][1].split(":")[2]
    }
    else if(note.kind === 40) {  // kind:40:Channel Creation
        status = "[40 Channel Creation]_"
    }
    else if(note.kind === 41) {  // kind:41:Channel Metadata
        status = "[41 Channel Metadata]_"
    }
    else if(note.kind === 1063) {  // kind:1063:File Metadata
        status = "[1063 File Metadata]_"
    }
    else if(note.kind === 1984) {  // kind:1984:Reporting
        status = "[Reporting " + note.tags[0][2] + "]_"
        for(let x=0; x<note.tags.length; x++) {
            if(note.tags[x][0] == "report") {
                status = "[Reporting " + note.tags[x][1] + "]_"
            }
        }
    }
    else if(note.kind === 4550) {  // kind:4550:
        status = "[Post Approval by moderators]_"
    }
    else if(note.kind === 9734) {  // kind:9734:Zap Request
        status = "[Zap Request]_"
    }
    else if(note.kind === 9735) {  // kind:9735
        status = "[9735 Zap]_"
        for(let x=0; x<note.tags.length; x++) {
            if(note.tags[x][0] === "description") {
                //content = content + note.tags[x][1].substring(11,75)
                //imageURL2 = getImageURL(note.tags[x][1].substring(11,75));  // avator from
            }
        }
    }
    else if(note.kind === 10000) {  // kind:10000:Mute List, snort
        let muteCount = 0
        for(let x=0; x<note.tags.length; x++) {
            muteCount++
        }
        //status = "[10000 Mute list(snort), mute word (nostter) " + muteCount + "]_"
        status = "[10000 Mute list " + muteCount + "]_"
        if(content === "") {
            content = "[empty]"
        }
        else {
            //content = "m+BHkF89jh..."
            //todo://content = content.substring(0,8) + "..."
        }
    }
    else if(note.kind === 10001) {  // kind:10001:Pin List, nostter
        let pinCount = 0
        for(let x=0; x<note.tags.length; x++) {
            pinCount++
        }
        status = "[10001 pin list (snort) " + pinCount + "]_"
    }
    else if(note.kind === 10002) {  // kind:10002:Relay List Metadata, nostter
        let relayCount = 0
        for(let x=0; x<note.tags.length; x++) {
            relayCount++
        }
        status = "[10002 Relay List Metadata / save relay by nostter/coracle/snort " + relayCount + "]_"
        if(content === "") {
            //todo://content = "[empty]";
        }
    }
    else if(note.kind === 10003) {  // kind:10003:
        let bookmarkCount = 0
        for(let x=0; x<note.tags.length; x++) {
            bookmarkCount++
        }
        //if(note.tags[0][1] != undefined) {
        status = "[10003 Bookmark list " + bookmarkCount + "]_" 
        if(content === "") {
            //todo://content = "[empty]"
        }
        else {
            //todo://content = "rgOCelOjTo..."
        }
        //}
        //content = ""
    }
    else if(note.kind === 10005) {  // kind:10005:
        let listCount = 0
        for(let x=0; x<note.tags.length; x++) {
            listCount++
        }
        status = "[10005 Public chats List " + listCount + "]_"
    }
    else if(note.kind === 24133) {  // kind:24133:Nostr Connect
        status = "[24133 Nostr Connect]_"
    }
    else if(note.kind === 30000) {  // kind:30000:Categorized People List
        status = "[30000 Follow sets_"
        let muteCount = 0
        for(let x=0; x<note.tags.length; x++) {
            muteCount++
        }
        //status = "[30000 Mute list (nostter/damus/snort) " + muteCount + "]_"
        status = "[30000 Mute list " + muteCount + "]_"
        if(content === "") {
            //todo://content = "[empty]"
        }
        else {
            //todo://content = "NeT1Xn3AXhQAi~"
        }
    }
    else if(note.kind === 30001) {  // kind:30001:Categorized Bookmark List
        let bookmarkCount = 0
        for(let x=0; x<note.tags.length; x++) {
            bookmarkCount++
        }
        //if(note.tags[0][1] != undefined) {
        status = "[30001 Generic lists(Bookmark) / " + note.tags[0][1] + " " + bookmarkCount + "]" 
        if(content === "") {
            //todo://content = "[empty]"
        }
        else {
            //todo://content = "rgOCelOjTo..."
        }
        //}
        //content = ""
    }
    else if(note.kind === 30002) {  // kind:30002:(snort tag follow)
        status = "[30002 tag follow(snort)]_"
        let tags = ""
        for(let x=0; x<note.tags.length; x++) {
            if(note.tags[x][0] === "t") {
            tags = tags + "#" + note.tags[x][1] + ", " 
            }
        }
        //todo://content = tags 
    }
    else if(note.kind === 30003) {  // kind:30003:
        let bookmarkCount = 0
        for(let x=0; x<note.tags.length; x++) {
            bookmarkCount++
        }
        //if(note.tags[0][1] != undefined) {
            status = "[30003 Bookmark sets / " + note.tags[0][1] + " " + bookmarkCount + "]" 
        //}
        if(content === "") {
            //todo://content = "[empty]"
        }
        else {
            //todo://content = content.substring(0,8) + "..."
        }
    }
    else if(note.kind === 30008) {  // kind:30008:Profile Badges
        if(note.tags.length > 1 && note.tags[1].length > 0)
        {
                let badgeCount = 0
            for(let x=0; x<note.tags.length; x++) {
            badgeCount++
            }
                status = "[30008 Profile Badges " + badgeCount + "] " 
            //todo://content = note.tags[note.tags.length-2][1].split(":")[2]
        }
    }
    // kind:30009
    else if(note.kind === 30009) {  // kind:30009:Badge Definition event
        //status = "[30009 Badge Definition] " + note.tags[1][1] + " , " + note.tags[2][1] 
        status = "[30009 Badge Definition] " 
        for(let i=0; i<note.tags.length; i++) {
            if(note.tags[i][0] == "d") {
            //todo://content = note.tags[i][1] + "<br />";
            }
        }
        for(let i=0; i<note.tags.length; i++) {
            if(note.tags[i][0] == "description") {
            //todo://content = content + "description: " + note.tags[i][1] + "<br />";
            }
        }
        for(let i=0; i<note.tags.length; i++) {
            if(note.tags[i][0] == "image") {
            //todo://content = content + "<img src=" + note.tags[i][1] + " height=150>";
            }
        }
    }
    else if(note.kind === 30078) {  // kind:30078:Application-specific Data
        status = "[30078_Application-specific Data]_"
        //content = note.tags[0][1] 
        //return
        for(let x=0; x<note.tags.length; x++) {
            if(note.tags[x][1] === "nostter-reaction-emoji") {
            status = status + "[" + note.tags[x][0] + " nostter-reaction-emoji]_"
            }
            else if(npub == "npub150qnaaxfan8auqdajvn292cgk2khm3tl8dmakamj878z44a6yntqk7uktv" ||
                    note.tags[x][1] == "" || 
                    note.tags[x][1] == "ostr-engine/Nip28/rooms_joined/v1" || 
                    note.tags[x][1] == "read-mark-map" || 
                    note.tags[x][1] == "OtherConfig" || 
                    note.tags[x][1] == "nostr-engine/User/settings/v1" || 
                    note.tags[x][1] == "plebstr" || 
                    note.tags[x][1] == "nostr-engine/Nip04/last_checked/v1" || 
                    note.tags[x][1] == "RelayConfig" || 
                    note.tags[x][1] == "nostr-engine/Nip28/last_checked/v1" || 
                    note.tags[x][1] == "ff_chats") {
            return
            }
            else if(note.tags[x][0] === "d") {
                status = status + "[d" + " " + note.tags[x][1] + "]_"
                //todo://content = "" 
            }
        }
    }
    else if(note.kind === 30311) {  // kind:30311:Live Event
        status = "[Live Event]_"
        //	content = content + "[empty]_"
    }
    else if(note.kind === 30023) {  // kind:30023:Long-form Content
        let noteCount = 0
        for(let x=0; x<note.tags.length; x++) {
            noteCount++
        }
        if(note.tags[0][1].includes("nosli")) {
                status = "[Nosli "  + noteCount + "]_"
        }
                else {
            status = "[30023 Long-form Content]_"
        }
    }
    else if(note.kind === 31989) {  // kind:31989:Handler recommendation
        let tagCount = 0
        for(let x=0; x<note.tags.length; x++) {
            tagCount++
        }
        status = "[31989 Handler recommendation " + tagCount + "]_"
        if(note.tags[0][0] === "d") {
            status = status + "[d" + " " + note.tags[0][1] + "]_"
            //todo://content = "" 
        }
        //	content = content + "[empty]_"
    }
    else if(note.kind === 31990) {  // kind:31990:Handler information
        let tagCount = 0
        for(let x=0; x<note.tags.length; x++) {
            tagCount++
        }
        status = "[31990 Handler information " + tagCount + "]_"
        //	content = content + "[empty]_"
    }






    const statusString = status;

    return statusString;
}
