# rn-module-network
> React native module for network.

## key info.plist
+ snapshot
<img src="2017-08-16-22-56-14.png" width="300" />

+ xml code:
```html
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
```