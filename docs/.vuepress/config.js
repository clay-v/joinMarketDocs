module.exports = {
  base: '/joinMarketDocs/',
  title: 'JoinMarket Docs',
  description: 'Make a coinjoin at any time',
  themeConfig: {
    sidebar: [
      '/',
      {
            title: "User Guide",
            collapsable: false,
            path: "/users",
            children: [
              ["/users/from-zero-to-coinjoin", "from-zero-to-coinjoin"],
              ["/users/architecture-notes", "architecture-notes"],
              ["/users/config-irc-update", "config-irc-update"],
              ["/users/fidelity-bonds", "fidelity-bonds"],
              ["/users/INSTALL", "INSTALL"],
              ["/users/JOINMARKET-QT-GUIDE", "JOINMARKET-QT-GUIDE"],
              ["/users/NATIVE-SEGWIT-UPGRADE", "NATIVE-SEGWIT-UPGRADE"],
              ["/users/orderbook", "orderbook"],
              ["/users/PAYJOIN", "PAYJOIN"],
              ["/users/SNICKER", "SNICKER"],
              ["/users/SOURCING-COMMITMENTS", "SOURCING-COMMITMENTS"],
              ["/users/TODO", "TODO"],
              ["/users/TESTING", "TESTING"],
              ["/users/tumblerguide", "tumblerguide"],
              ["/users/USAGE", "USAGE"],
              ["/users/YIELDGENERATOR", "YIELDGENERATOR"]
            ]
      },
      {
            title: "Developer Guide",
            collapsable: false,
            path: "/developers",
            children: [
              ["/developers/ArchOverview", "ArchOverview"],
              ["/developers/High-level-design", "High-level-design"],
              ["/developers/Joinmarket-messaging-protocol", "Joinmarket-messaging-protocol"]
            ]
      },
    ]
  }
}
