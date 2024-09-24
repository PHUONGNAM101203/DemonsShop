import React, { Fragment, useEffect, useState } from "react";

const NoteModal = (props) => {
    return (
        <Fragment>
<div class="mt-5 mr-4 ml-4 mb-5 ">
    <h3 class="mb-4">Tips for creating unique fragrances by mixing ingredients</h3>
    <div class="table-responsive">
      <table class="table table-striped border shadow rounded-lg ">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Mix with</th>
            <th>Fragrance Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lavender</td>
            <td>Bergamot</td>
            <td>A fresh and relaxing scent, stimulating tranquility and sophistication.</td>
          </tr>
          <tr>
            <td>Oakwood</td>
            <td>Vanilla</td>
            <td>A warm and sweet fragrance, creating a cozy and gentle ambiance.</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>Jasmine</td>
            <td>A fresh, feminine fragrance, balancing freshness and allure.</td>
          </tr>
          <tr>
            <td>Lavender</td>
            <td>Thyme</td>
            <td>A unique and mysterious scent, combining the warmth of lavender with the refreshing aroma of thyme.</td>
          </tr>
          <tr>
            <td>Watermelon</td>
            <td>Lemon Oil</td>
            <td>A fresh and sweet fragrance, bringing a sense of freshness and vitality.</td>
          </tr>
          <tr>
            <td>Rose</td>
            <td>Lotus</td>
            <td>A feminine and seductive fragrance, combining the beauty of rose with the sophistication of lotus.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p><strong>Tip:</strong> Try combining ingredients from different groups to create unique and diverse fragrances!</p>
  </div>
        </Fragment>)
}
export default NoteModal;