export const createRippleEffect = (event: MouseEvent) => {
    const button = event.currentTarget as HTMLElement | null;
    const circle = document.createElement("span");
    const diameter = Math.max(
      button?.clientWidth || 0,
      button?.clientHeight || 0
    );
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - (button?.offsetLeft || 0) - radius
    }px`;
    circle.style.top = `${event.clientY - (button?.offsetTop || 0) - radius}px`;
    circle.classList.add("ripple");

    const ripple = button?.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button?.appendChild(circle);
  };
