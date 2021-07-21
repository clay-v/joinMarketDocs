(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{394:function(e,t,a){"use strict";a.r(t);var n=a(40),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"joinmarket-messaging-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joinmarket-messaging-protocol"}},[e._v("#")]),e._v(" JoinMarket messaging protocol")]),e._v(" "),a("p",[e._v("The purpose of this document is to unambiguously define how joinmarket participants communicate. The messaging substrate allows for communication over multiple "),a("code",[e._v("MessageChannel")]),e._v(" objects, managed by a single "),a("code",[e._v("MessageChannelCollection")]),e._v(" object; see "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/master/joinmarket/message_channel.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("this module"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("All messages are split into fields. Fields are currently separated with a single whitespace character (more than one whitespace char is not allowed.")]),e._v(" "),a("p",[e._v("Messages have format:")]),e._v(" "),a("p",[e._v("!command [[msg field 1] [msg field 2] ...]")]),e._v(" "),a("p",[e._v("Messages are sent in two modes: public (broadcast to all other agents) or private (directed to a specific\nagent and not seen by others).")]),e._v(" "),a("p",[e._v("The first field always starts with the "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/message_channel.py#L8",target:"_blank",rel:"noopener noreferrer"}},[e._v("command prefix"),a("OutboundLink")],1),e._v(", currently '!' and is completed with one of the following commands:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Command word")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("mode")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("reloffer")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("public or private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("absoffer")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("public or private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("orderbook")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("public")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("cancel")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("public")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("hp2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("public")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("fill")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("pubkey")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("auth")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("ioauth")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("tx")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("sig")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("error")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("push")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("private")])])])]),e._v(" "),a("p",[e._v("Private messages not starting with a command from this list are to be explicitly rejected.\nPublic messages not starting with a command from this list are to be ignored.\nThe initial command field is followed with zero or more message fields.")]),e._v(" "),a("h1",{attrs:{id:"multi-part-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-part-messages"}},[e._v("#")]),e._v(" Multi-part messages")]),e._v(" "),a("p",[e._v('An unencrypted message may optionally contain more than one command. The message is first split into sub-messages on the command prefix, then each "sub-message" is treated as a distinct message, applying the rules as listed above.')]),e._v(" "),a("p",[e._v("Note that this is not allowed for encrypted messages, which are only allowed to send a single command field at the start of the message. It "),a("strong",[e._v("is")]),e._v(" currently used for the "),a("code",[e._v("reloffer")]),e._v(" and "),a("code",[e._v("absoffer")]),e._v(" commands.")]),e._v(" "),a("h1",{attrs:{id:"irc-specific-feature-chunks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#irc-specific-feature-chunks"}},[e._v("#")]),e._v(" IRC-specific feature: chunks")]),e._v(" "),a("p",[e._v("Messages are split into chunks for passing over an IRC messaging channel; this code is found therefore in the "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/irc.py#L236-L252",target:"_blank",rel:"noopener noreferrer"}},[e._v("irc module"),a("OutboundLink")],1),e._v(". Chunks are terminated with the chunk delimiter ';', unless it is the final chunk, which case the chunk delimiter is '~'.")]),e._v(" "),a("p",[e._v("Messages are split into chunks before sending over the messaging channel, and the decision for chunk size\nis set globally as a function of the messaging implementation (currently: "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/irc.py#L18",target:"_blank",rel:"noopener noreferrer"}},[e._v("450 characters"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("Future non-IRC message channel implementations thus may or may not use this feature, depending on their characteristics, but all IRC implementations must use it.")]),e._v(" "),a("h1",{attrs:{id:"encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),a("p",[e._v("Public messages (broadcast to all other participants) are never encrypted.")]),e._v(" "),a("p",[e._v("Private messages of command-type "),a("code",[e._v("fill")]),e._v(", "),a("code",[e._v("pubkey")]),e._v(", "),a("code",[e._v("error")]),e._v(", "),a("code",[e._v("orderbook")]),e._v(", "),a("code",[e._v("push")]),e._v(", "),a("code",[e._v("reloffer")]),e._v(" and "),a("code",[e._v("absoffer")]),e._v(" are sent in plaintext.\nMessages of command-type "),a("code",[e._v("ioauth")]),e._v(", "),a("code",[e._v("auth")]),e._v(", "),a("code",[e._v("tx")]),e._v(" and "),a("code",[e._v("sig")]),e._v(" are sent encrypted.\nThese rules are enforced "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/message_channel.py#L13-L16",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/message_channel.py#L818-L826",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("All encrypted messages are "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/enc_wrapper.py#L91-L99",target:"_blank",rel:"noopener noreferrer"}},[e._v("base64 encoded"),a("OutboundLink")],1),e._v(" before being passed onto the message channel.")]),e._v(" "),a("p",[e._v("For encrypted messages, the entire set of message fields are sent as a single encrypted block (including the whitespace delimiters between the message fields). The command field and the chunk indicator field (for IRC) are sent in plaintext. (TODO: "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/issues/352",target:"_blank",rel:"noopener noreferrer"}},[e._v("pad messages to improve privacy"),a("OutboundLink")],1),e._v("; eg, to combat MITM correlation of ioauth and sig messages with the inputs belonging to a liquidity provider).")]),e._v(" "),a("p",[e._v("For clarification, the sequence for sending of encrypted messages is therefore plaintext--\x3eencryption--\x3ebase64encoding--\x3echunking--\x3e prepend !command to first chunk and add chunk delimiters --\x3esend to message channel (private message for encryption). And the reverse for receiving.")]),e._v(" "),a("h1",{attrs:{id:"for-multiple-message-channels-message-signatures-for-anti-spoofing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-multiple-message-channels-message-signatures-for-anti-spoofing"}},[e._v("#")]),e._v(" For multiple message channels: message signatures for anti-spoofing")]),e._v(" "),a("h5",{attrs:{id:"pubkey-based-nicks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pubkey-based-nicks"}},[e._v("#")]),e._v(" Pubkey-based nicks")]),e._v(" "),a("p",[e._v("The username/nick/nym for the Joinmarket bot is ephemeral-per-session, but is constructed in such a way that it can be signed for, so that it is not possibly to successfully spoof that user by registering the same nick on another active message channel. The nick is constructed as follows:")]),e._v(" "),a("p",[e._v("A 32 byte private key is generated at random.")]),e._v(" "),a("p",[e._v("A Bitcoin secp256k1 public key is "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/message_channel.py#L114",target:"_blank",rel:"noopener noreferrer"}},[e._v("created"),a("OutboundLink")],1),e._v(" using it.")]),e._v(" "),a("p",[e._v('nick = one "type" byte (currently "J") + one version byte (current '),a("code",[e._v("JM_VERSION")]),e._v(" protocol value, "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/configure.py#L55",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(") + Base58 (not Base58Check) of: first "),a("code",[e._v("joinmarket.message_channel.NICK_HASH_LEN")]),e._v(" bytes of sha256 of : ephemeral per-bot-process public key as just described.")]),e._v(" "),a("p",[e._v("If length(nick) < "),a("code",[e._v("joinmarket.message_channel.NICK_MAX_ENCODED")]),e._v(", right pad with 'O' char to that length.")]),e._v(" "),a("p",[e._v("Thus according to current rules the nick is 16 characters in length, consisting of one type byte, one version byte and 14 bytes of pubkey-hash (right padded if necessary to fix length).")]),e._v(" "),a("h5",{attrs:{id:"applying-signatures-to-private-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applying-signatures-to-private-messages"}},[e._v("#")]),e._v(" Applying signatures to private messages.")]),e._v(" "),a("p",[a("strong",[e._v("All")]),e._v(" private messages (whether encrypted or not) are extended with the additional fields <pubkey> <signature> where pubkey is the Bitcoin pubkey mentioned above, hex encoded, and the signature is a Bitcoin signature, also hex encoded (TODO: this could be substantially improved in encoding size with pubkey recovery, and more compact encoding). See "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/message_channel.py#L851-L858",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("As defence against replaying the same signature on different message channels, note specifically that the plaintext which is signed is "),a("code",[e._v("message+hostid")]),e._v(", see "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/message_channel.py#L855",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", where "),a("code",[e._v("hostid")]),e._v(' is the hostid of this specific MessageChannel object, for IRC this is the "network" field passed from the IRC server.')]),e._v(" "),a("p",[e._v("Note that since this extension to the message occurs in the abstract message class MessageChannel, any chunking as described above occurs after it. The "),a("code",[e._v("pubkey")]),e._v(" and "),a("code",[e._v("sig")]),e._v(" are just 2 additional fields for any private message sent.")]),e._v(" "),a("p",[e._v("All received private messages are verified against the nick of the sender "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/blob/35dc60848c201f1c071a00c885969d1cc458cbbf/joinmarket/message_channel.py#L932-L939",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to prevent the threat of spoofing nicks.")]),e._v(" "),a("h1",{attrs:{id:"valid-conversation-sequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valid-conversation-sequences"}},[e._v("#")]),e._v(" Valid conversation sequences:")]),e._v(" "),a("p",[e._v("(Announcements, not interactive/conversation):")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("TAKER")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("MAKER")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("<<<")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("![rel|abs]offer (public)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("<<<")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("!cancel(public)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("<<<")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("!hp2(public)")])])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("TAKER")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("MAKER")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("!orderbook(public)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v(">>>")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("<<<")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("![rel|abs]order (private)")])])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("TAKER")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}}),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("MAKER")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("!fill(private)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v(">>>")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("<<<")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("!pubkey(private)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("!auth(private)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v(">>>")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("<<<")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("!ioauth(private)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("!tx(private)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v(">>>")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("<<<")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("!sig(private)")])])])]),e._v(" "),a("p",[e._v("Each taker may speak to many makers simultaneously and each maker may speak to many takers simultaneously in private.")]),e._v(" "),a("h4",{attrs:{id:"private-conversation-in-detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-conversation-in-detail"}},[e._v("#")]),e._v(" Private conversation in detail:")]),e._v(" "),a("p",[e._v('See "Definitions" section below for the key for the abbreviations.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1: M: !ordertype [order details]!ordertype [orderdetails]... (NS)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2: T: !fill order-id amount tencpubkey C (NS)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("3: M: !pubkey mencpubkey (NS)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("4: T*: !auth O (NS)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("5: M*: !ioauth ulist maker_auth_pub coinjoinA changeA B(mencpubkey) (NS)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("6: T*: !tx txhex (NS)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("7: M*: !sig txsig (NS)\n")])])]),a("h4",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes:")]),e._v(" "),a("p",[e._v("After step 2, if provided commitment is blacklisted according to maker's policy, maker quits. Current implementation stores utxo commitments (note that there are "),a("code",[e._v("taker_utxo_retries")]),e._v(" possible commitments per utxo, and that the commitments do not reveal the utxo, thus effectively the same utxo can be tried that many times) in a file named "),a("code",[e._v("blacklist")]),e._v(".")]),e._v(" "),a("p",[e._v("After step 4, if PoDLE verification fails, the maker quits before sending "),a("code",[e._v("!ioauth")]),e._v(", thereby disallowing receipt of owned utxos.")]),e._v(" "),a("p",[e._v("For PODLE calculation see "),a("a",{attrs:{href:"https://gist.github.com/AdamISZ/9cbba5e9408d23813ca8#defence-2-committing-to-a-utxo-in-publicplaintext-at-the-start-of-the-handshake",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("In 5, "),a("code",[e._v("!ioauth ulist maker_auth_pub coinjoinA changeA B(mencpubkey) (NS)")]),e._v(", returned by maker, it's to be noted here that "),a("code",[e._v("maker_auth_pub")]),e._v(" is needed to use an "),a("em",[e._v("input")]),e._v(" , rather than an output, pubkey, as the anti-MITM key for the reason that a maker might not always own the coinjoin output key (see e.g. patientsendpayment mixing of maker/taker role).")]),e._v(" "),a("p",[e._v("Nick signature: currently re-calculates expected nick from given pubkey then validates signature against the entire message before NS. In future could cut out ~ 66 bytes by making use of secp256k1 pubkey recovery. The purpose of this feature is to prevent impersonation of a running bot by using its nick on a different message channel (see issue 568).")]),e._v(" "),a("p",[e._v("Taker side auth of utxo has been REMOVED, see overview of argument "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/issues/171#issuecomment-235868269",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and see also "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket/pull/90#issuecomment-108648823",target:"_blank",rel:"noopener noreferrer"}},[e._v("earlier background"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),a("p",[a("strong",[e._v("T")]),e._v(": taker")]),e._v(" "),a("p",[a("strong",[e._v("M")]),e._v(": maker")]),e._v(" "),a("p",[a("strong",[e._v("*")]),e._v(" : indicates message "),a("strong",[e._v("not including")]),e._v(" NS is encrypted")]),e._v(" "),a("p",[a("strong",[e._v("[t,m]encpubkey")]),e._v(" : taker and maker encryption pubkeys, per transaction, for ECDH setup")]),e._v(" "),a("p",[a("strong",[e._v("C")]),e._v(': single data field for commitment to a utxo by taker, by default for PoDLE (C=H(P2)). First byte is commitment type, default "P" for PoDLE.')]),e._v(" "),a("p",[a("strong",[e._v("B(p)")]),e._v(": bitcoin signature of an encryption pubkey p (signed message format standardised as for Bitcoin Core etc.)")]),e._v(" "),a("p",[e._v("Commitment data for default PoDLE construct:")]),e._v(" "),a("p",[a("strong",[e._v("O")]),e._v(": commitment opening serialization, consists of the following fields separated by a field separator (default '|'):")]),e._v(" "),a("p",[a("strong",[e._v("U")]),e._v(": utxo used for PoDLE (not necessarily from wallet)")]),e._v(" "),a("p",[a("strong",[e._v("P")]),e._v(": pubkey used for PoDLE (not necessarily from wallet)")]),e._v(" "),a("p",[a("strong",[e._v("P2")]),e._v(": shifted base point pubkey for PoDLE")]),e._v(" "),a("p",[a("strong",[e._v("s, e")]),e._v(": schnorr sig values for PoDLE")]),e._v(" "),a("p",[a("strong",[e._v("maker_auth_pub")]),e._v(": pubkey of keypair used to authorize and setup encryption by maker (must correspond to one of maker's input addresses)")]),e._v(" "),a("p",[a("strong",[e._v("coinjoinA")]),e._v(": coinjoin address used by maker")]),e._v(" "),a("p",[a("strong",[e._v("changeA")]),e._v(": change address used by maker")]),e._v(" "),a("p",[a("strong",[e._v("ulist")]),e._v(": list of utxos that maker proposes to be used in transaction")]),e._v(" "),a("p",[a("strong",[e._v("(NS)")]),e._v(": nick signature (either of form pub, sig or from pubkey recovery, bitcoin type) : message to be signed is the whole message to be sent + message channel identifier str("),a("code",[e._v("serverport")]),e._v(") (the latter to prevent cross-channel replay).")]),e._v(" "),a("p",[e._v("This document is not yet complete. Edit proposals welcomed.")])])}),[],!1,null,null,null);t.default=r.exports}}]);