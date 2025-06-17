# Challenge SMG React

This app was built as part of a React challenge. It uses The Movie DB API to
create a basic simulation of a streaming platform.

It uses Vite + React 19, as well as StyleX for its styles. To handle requests,
it uses Tanstack Query's useQuery.

It implements several components that were designed to be used generically by
any application.

## Development Process

The development of the application began with the analysis of the mockup and the
identification of possible calls to the TMDB API. Subsequently, I selected Vite
as the main tool for building the application.

Why Vite? Given the apparent simplicity of the application, advanced features
such as those offered by Remix or Next.js were not required. The combination of
**Vite** and **React** greatly simplified development, allowing me to focus
directly on implementing the necessary features.

To manage access to the **TMDB API**, I created a simple file that encapsulates
the query functions. I chose to use the **native `fetch` API** to avoid
including additional dependencies and keep the application lightweight.

Next, I used **Material UI** to prototype the interface. My goal was to quickly
visualize the overall structure of the application, regardless of initial design
discrepancies. I designed four pages, various sections, and several components.
For request management, I implemented **Tanstack Query** (formerly known as
React Query), which ensured robust behavior without reinventing the wheel.

Once the general structure was defined, I focused on the details of the
application: I proceeded to replace most of the **Material UI** components with
simple **HTML** elements, styled with **StyleX**. This decision allowed me
greater control over the final appearance, better separation between structure
and styles, and the creation of components with a more controlled style API,
thus preventing their internal structure from becoming part of their contract.

Finally, once the replacement was complete, I made sure to modularize as much as
possible to encourage **component reuse**. I also implemented a **basic
responsiveness** for different screen sizes; however, since the mockup did not
detail the mobile appearance, I did not spend excessive time on it.

## How to Build

To compile and run the application, simply make sure you have Bun installed on
your system, and run:

```sh
bun install
```

After that, you can simply start the development server using

```sh
bun run dev
```

## License

This app is licensed under the [Blue Oak Model License](LICENSE.md).
