# topstory README

# [topstory](https://topstory.vercel.app/)

## Description

*topstory* is a news reader that connects to the [New York Times API](https://developer.nytimes.com/), specifically the:

- Top Stories API
- Most Popular API
- NewsWire (real-time feed of published articles)

## Tech Used

### Javascript

Javascript, specifically the fetch method. The fetch method pulls the appropriate API and returns the data in .json format. That data is mapped (using the map function), which pulls the article url and abstract. 

The URL and abstract are then appended to an 'a' tag and 'p' tag, respectively. 

The process is the same for Top Stories, Popular Stories, and NewsWire. Thanks Enlight, on [YouTube](https://youtu.be/RyeSXC4eww0), for a great outline of the fetch method.

### CSS

Styling was achieved through [Materialize](https://materializecss.com/), "a modern responsive front-end framework based on Material Design."

Using Materialize, I was able to build out a fully responsive app, including:

- a fully responsive design for all screens, including a hamburger menu for mobile and a navbar for the desktop
- three main columns for the desktop and one for mobile
- a footer featuring information an 'About Me' and 'Connect' sections

Fonts can be found at [Font Awesome](https://fontawesome.com/). 

### Vercel

The app is deployed through [Vercel](https://vercel.com) and is also connected to my personal website, which is hosted on Hostinger. 

### Successes, Challenges, and What I Would Change

This project was my first successful use of GitHub, which had frustrated me. It felt great to actually be pushing to GitHub without my fingers crossed. This was also my first deployment with  Vercel, and it couldn't have been easier. 

I definitely didn't use Materialize to its fullest extent, but I'm pleased with the styling of the page. I'd like to clean up the look of the footer, adjusting icon size, etc. There is definitely too much white space (well, blue space).

I would also add a search bar so that users can search for articles. *topstory* would then be a fully-functional portal to [The New York Times](https://www.nytimes.com/).
