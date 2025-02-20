
/** 
* This file has been auto-generated by '@kontent-ai/model-generator@8.0.0-14'.
* 
* (c) Kontent.ai
*  
* -------------------------------------------------------------------------------
* 
* Project: Ficto Healthtech [QA Source project]
* Environment: Production 
* Id: b0255462-358c-007b-0be0-43ee125ce1f0
* 
* -------------------------------------------------------------------------------
**/

import type { Elements } from "@kontent-ai/delivery-sdk";
import type { CoreContentType } from "../system/index.ts";
import type { Fact } from "./index.ts";

/**
 * 🧱 Visual container
 *
 * Id: 188a66a1-5959-50a3-9073-a756171aff14
 * Codename: visual_container
 */
export type Block_VisualContainer = CoreContentType<
  {
    /**
     * Title
     *
     * Type: text
     * Required: false
     * Codename: title
     * Id: fbdd1530-319d-5c94-8bc7-c2c82f744272
     */
    readonly title: Elements.TextElement;
    /**
     * Subtitle
     *
     * Type: text
     * Required: false
     * Codename: subtitle
     * Id: 9a6832bb-d7b6-5954-aa80-92aee2b96441
     */
    readonly subtitle: Elements.TextElement;
    /**
     * Items
     *
     * Type: modular_content
     * Required: true
     * Codename: items
     * Id: 41ebb699-10b7-5493-b6d3-d6098ab5ebbc
     */
    readonly items: Elements.LinkedItemsElement<Fact>;
    /**
     * Visual representation
     *
     * Type: multiple_choice
     * Required: true
     * Codename: visual_representation
     * Id: b81bc86b-7f9f-5d2f-909e-b973320531f4
     * Guidelines: ⚠ You should try to avoid including visual information in the content.This is one of the edge cases that might be viable since this content type is used for website representation only.
     */
    readonly visual_representation: Elements.MultipleChoiceElement<
      "hero_unit" | "grid" | "stack"
    >;
  },
  "visual_container"
>;

/**
 * Type representing all available element codenames for 🧱 Visual container
 */
export type Block_VisualContainerElementCodenames =
  | "title"
  | "subtitle"
  | "items"
  | "visual_representation";

/**
 * Type guard for 🧱 Visual container
 *
 * Id: 188a66a1-5959-50a3-9073-a756171aff14
 * Codename: visual_container
 */
export function isBlock_VisualContainer(
  item: CoreContentType | undefined | null,
): item is Block_VisualContainer {
  return item?.system?.type === "visual_container";
}
