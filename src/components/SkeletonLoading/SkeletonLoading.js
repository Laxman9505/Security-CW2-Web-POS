/** @format */
import Skeleton from "react-loading-skeleton";
import { animated, useSpring } from "react-spring";
import "./Skeleton.css";

function LoadingSkeleton({ backgroundColor }) {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="my-component">
      <animated.div style={props}>
        <Skeleton
          style={{
            backgroundImage: "linear-gradient(to right, red, #4a00e0)",
          }}
          height={window.innerHeight}
        />
      </animated.div>
    </div>
  );
}

export default LoadingSkeleton;
