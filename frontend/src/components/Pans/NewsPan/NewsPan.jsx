import React from "react";
import { StackedCarousel } from "react-stacked-carousel";
import "react-stacked-carousel/dist/index.css";
import "./NewsPan.css";

function NewsPan() {
  return (
    <div className="weatherCard card text-neutral-content shadow-xl">
      <div className="flex flex-row">
        <button class="btn btn-xs">Button</button>
        <button class="btn btn-xs">Button</button>
        <button class="btn btn-xs">Button</button>
      </div>
      <div className="flex flex-col">
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
          1
        </div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
          2
        </div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
          3
        </div>
      </div>
    </div>
  );
}

export default NewsPan;
