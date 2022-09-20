// Learn more https://docs.expo.dev/guides/monorepos
const {getDefaultConfig} = require('expo/metro-config');
const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);
// console.log(JSON.stringify(config, null, 4));

// If your monorepo tooling can give you the list of monorepo workspaces linked
// in your app workspace, you can automate this list instead of hardcoding them.
const monorepoPackages = {
    '@monorepo-test/utils': path.resolve(workspaceRoot, 'packages/utils'),
};

// 1. Watch the local app folder, and all related packages (limiting the scope and speeding it up)
// config.watchFolders = [workspaceRoot]
// config.watchFolders = [__dirname, ...Object.values(monorepoPackages)];
// Add the monorepo workspaces as `extraNodeModules` to Metro.
// If your monorepo tooling creates workspace symlinks in the `node_modules` folder,
// you can either add symlink support to Metro or set the `extraNodeModules` to avoid the symlinks.
// See: https://facebook.github.io/metro/docs/configuration/#extranodemodules
// config.resolver.extraNodeModules = monorepoPackages;

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
