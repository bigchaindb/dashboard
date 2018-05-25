# BigchainDB Dashboard - UX Assets and Artefacts

Update –25.5.2018 [Marius]

Plz fing V0.3 a slightly reworked dashboard interface view (bigchaindb-dashboard-v0-3.png).
I think there is much more potential for improvements regarding functionality and also UX & design – Let's work on it when I have some more time …

Happy GDPR day ;)
Marius


--


Update – 18.5.2018 [Marius]

First dashboard interface design thoughts.

Blocks contain "transaction cards" which are separated in CREATE and TRANSFER transaction type. 
Each transaction contains minimal information – tbd. which are the essential ones.

Each transaction card has a timestamp and a additional info menu at the bottom (here the user can get additional info e. g. about asset owner, crypto conditions, timestamp …)
To provide even more information to the user, we can provide the functionality to expand each transaction card when the user clicks on it. (tbd)

On the tab bar of the BDB dashboard the user can switch between different views e. g. a list of assets, transfers or a pure console view.

Let's build up on this first FE thought :)
I think we have to talk about wording regarding "create>asset" and "transfer>payload" – Possible naming: Transfer > Payload; Transfer > Transaction; Create > Transfer …
