import { useDispatch, useSelector } from "react-redux";
import { Button } from "~/components/button";
import { authActions, authSelectors } from "~/slices/auth";
import { preferencesActions, preferencesSelectors } from "~/slices/preferences";
import type { AppDispatch } from "~/store";
import type { Route } from "./+types/home";

export const meta = (_meta: Route.MetaArgs) => {
  return [
    { title: "Redux Example" },
    { name: "description", content: "Showing how things might be done in a redux land" },
  ];
};

export default function Home() {
  const auth = useSelector(authSelectors.selectAuth);
  const preferences = useSelector(preferencesSelectors.selectPreferences);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <div>Auth</div>
        {JSON.stringify(auth, null, 2)}
      </div>
      <div>
        <div>Preferences</div>
        {JSON.stringify(preferences, null, 2)}
      </div>
      <div className={"flex"}>
        <Button onClick={() => dispatch(authActions.signIn())}>Sign In</Button>
        <Button onClick={() => dispatch(authActions.signOut())}>
          Sign Out
        </Button>
      </div>
      {auth.authenticated && (
        <div className={"flex"}>
          <Button
            active={preferences.appearance === "dark"}
            onClick={() => dispatch(preferencesActions.setAppearance("dark"))}
          >
            Dark
          </Button>
          <Button
            active={preferences.appearance === "light"}
            onClick={() => dispatch(preferencesActions.setAppearance("light"))}
          >
            Light
          </Button>
        </div>
      )}
    </div>
  );
}
