module.exports = {
  base: '/joinMarketDocs/',
  title: 'JoinMarket Docs',
  description: 'Make a coinjoin at any time',
  themeConfig: {
    sidebar: [
      ["/users/", "Introduction"],
      {
            title: "Installation",
            collapsable: false,
            children: [
              {
                    title: "Joininbox",
                    collapsable: false,
                    path: "/users/joininbox",
                    children: [
                      ["/users/install-virtual-machine", "Virtual Machine"],
                      ["https://github.com/openoms/joininbox#required-hardware", "Dedicated Hardware"]
                    ]
              },
              ["/users/install-manual", "Manual Installation"]
            ]
      },
      ["/users/JOINMARKET-QT-GUIDE", "Getting Started"],
      {
            title: "User Guide",
            collapsable: false,
            children: [
              ["/users/architecture-notes", "Architecture Notes"],
              ["/users/config-irc-update", "IRC Configuration"],
              ["/users/fidelity-bonds", "Fidelity Bonds"],
              ["/users/NATIVE-SEGWIT-UPGRADE", "Native Segwit Upgrade"],
              ["/users/orderbook", "Orderbook"],
              ["/users/PAYJOIN", "Payjoin"],
              ["/users/SNICKER", "SNICKER"],
              ["/users/SOURCING-COMMITMENTS", "Sourcing Commitments"],
              ["/users/TODO", "Todo"],
              ["/users/TESTING", "Testing"],
              ["/users/tumblerguide", "Tumbler Guide"],
              ["/users/USAGE", "USAGE"],
              ["/users/YIELDGENERATOR", "Yield Generator"]
            ]
      },
      {
            title: "Developer Guide",
            collapsable: false,
            children: [
              ["/developers/ArchOverview", "Arch Overview"],
              ["/developers/High-level-design", "High-level Design"],
              ["/developers/Joinmarket-messaging-protocol", "Joinmarket Messaging Protocol"]
            ]
      },
    ]
  }
}
