# Challenge SMG React

This application was developed as part of a **React** challenge. It uses the
**The Movie DB API** to simulate a basic streaming platform.

The project is built with **Vite + React 19** and uses **StyleX** for styling.
For request management, **Tanstack Query** (specifically `useQuery`) is used,
ensuring robust and efficient data manipulation.

The application includes several **generic components** designed to be reused in
different applications, promoting modularity and scalability.

## Development Process

The development of the application began with a **detailed analysis of the
mockup** and the identification of possible interactions with the **TMDB API**.
Subsequently, **Vite** was selected as the main tool for building the
application.

**Why Vite?** Given the apparent simplicity of the application, advanced
features such as those offered by frameworks such as Remix or Next.js were not
required. The combination of **Vite and React** greatly simplified development,
allowing me to focus directly on implementing the necessary functionalities.

To manage access to the **TMDB API**, I created a simple file that encapsulates
the query functions. I chose to use the **native `fetch` API** in order to avoid
including additional dependencies and keep the application as lightweight as
possible.

Next, I used **Material UI** to prototype the interface. My goal was to quickly
visualize the overall structure of the application, without initially worrying
about design discrepancies. I designed four pages, several sections, and various
components. For request management, I implemented **Tanstack Query** (formerly
known as React Query), which ensured robust behavior without the need to
reinvent the wheel.

Once the overall structure was defined, I focused on the specific details of the
application. I proceeded to replace most of the **Material UI** components with
**pure HTML elements**, styled with **StyleX**. This decision gave me greater
control over the final appearance, better separation between structure and
styles, and the ability to create components with a **more controlled style
API**, preventing their internal structure from becoming part of their contract.

Finally, once the replacement was complete, I made sure to **modularize as much
as possible** to encourage **component reuse**. I also implemented **basic
responsiveness for different screen sizes**; however, since the mockup did not
detail the mobile appearance, I did not spend excessive time on this section.

## How to Build and Run

To build and run the application, make sure you have **Bun** installed on your
system. Then, simply run the following commands in your terminal:

```sh
bun install
```

Once the dependencies are installed, you can start the development server using:

```sh
bun run dev
```

## Environment Variables

For the application to work properly, you need to set an environment variable
with your TMDB API key. Create a file called `.env.local` in the root of the
project and add the following line:

```
VITE_API_KEY=your_api_key_here
```

Be sure to replace `your_api_key_here` with your actual API key from The Movie
DB.

## License

This application is licensed under the [Blue Oak Model License](LICENSE.md).
