# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Iframe.spec.js >> Iframe
- Location: tests\Iframe.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: page.goto: Test timeout of 40000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/frames", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
      - generic [ref=e71]: Widgets
      - generic [ref=e84]: Interactions
      - generic [ref=e96]: Book Store Application
    - generic [ref=e108]:
      - generic [ref=e109]:
        - heading "Frames" [level=1] [ref=e110]
        - generic [ref=e111]: Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame, which is this window, and the two frames below
        - iframe [ref=e113]
        - iframe [ref=e115]
      - iframe [ref=e119]
    - generic [ref=e124]:
      - iframe [ref=e127]
      - iframe [ref=e130]
  - contentinfo [ref=e131]:
    - generic [ref=e132]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1 | import {test} from "@playwright/test"
  2 | 
  3 | test('Iframe', async ({page})=>{
> 4 |     await page.goto('https://demoqa.com/frames')
    |                ^ Error: page.goto: Test timeout of 40000ms exceeded.
  5 |     const iframeId = page.frameLocator('#frame1')
  6 |     const iframeHeading = await iframeId.locator('#sampleHeading').textContent()
  7 |     console.log(iframeHeading)
  8 | })
```