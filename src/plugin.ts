import { withProjectBuildGradle } from "@expo/config-plugins";
import { ConfigPlugin } from "@expo/config-plugins";

const PERSONA_MAVEN_BLOCK = `
// @generated by Expo plugin - with-persona
allprojects {
    repositories {
        maven {
            url 'https://sdk.withpersona.com/android/releases'
        }
    }
}

`;

const withPersonaPlugin: ConfigPlugin = (config) => {
  return withProjectBuildGradle(config, (config) => {
    if (
      !config.modResults.contents.includes(
        "https://sdk.withpersona.com/android/releases"
      )
    ) {
      config.modResults.contents += `\n${PERSONA_MAVEN_BLOCK}`;
    }
    return config;
  });
};

export default withPersonaPlugin;
