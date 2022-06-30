import * as faceapi from 'face-api.js';

const maxDescriptorDistance = 0.5;

export async function loadModels() {
  const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
  await faceapi.loadFaceLandmarkModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
}

export async function getFullFaceDescription(blob, inputSize = 512) {
  let scoreThreshold = 0.5;
  const OPTION = new faceapi.SsdMobilenetv1Options({
    inputSize,
    scoreThreshold,
  });
  let img = await faceapi.fetchImage(blob);
  let fullDesc = await faceapi
    .detectAllFaces(img, OPTION)
    .withFaceLandmarks()
    .withFaceDescriptors();
  return fullDesc;
}

export async function createMatcher(faceProfile) {
  let labeledDescriptors = faceProfile.map(
    (member) =>
      new faceapi.LabeledFaceDescriptors(
        member.name,
        member.descriptors.map((descriptor) => new Float32Array(descriptor))
      )
  );
  let faceMatcher = new faceapi.FaceMatcher(
    labeledDescriptors,
    maxDescriptorDistance
  );
  return faceMatcher;
}
