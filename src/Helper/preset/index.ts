import path from "path";

export type Preset = {
    name: string;
    answers: Record<string, string>;
};

export const get_presets = async (source: string): Promise<Preset[]> => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const sourcePrompts = require(path.resolve(source, "prompt.js"));

        return (sourcePrompts.presets ?? []) as Preset[];
    } catch (e) {
        return [];
    }
};
